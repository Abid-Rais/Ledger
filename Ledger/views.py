from django.shortcuts import render
from django.http import JsonResponse
from decouple import config
from django.views.decorators.csrf import csrf_exempt

from authentication.models import CustomUser
from plaid import Client

from .models import Account, PlaidToken, Transaction

from pprint import pprint

# Create your views here.

PLAID_CLIENT_ID = config('PLAID_CLIENT_ID')
PLAID_SECRET = config('PLAID_SECRET')
PLAID_ENV = config('PLAID_ENVIRONMENT')
PLAID_REDIRECT_URI = config('PLAID_REDIRECT_URI')

client = Client(client_id=PLAID_CLIENT_ID,
                secret=PLAID_SECRET, environment=PLAID_ENV)


def createLinkToken():
    user = None

    res = client.LinkToken.create({
        'user': {
            'client_user_id': user.id
        },
        'products': ['auth'],
        'client_name': 'Ledger',
        'country_codes': ['US'],
        'language': 'en',
    })

    return JsonResponse(res)


@csrf_exempt
def registerAccount(request):

    userID = int(request.POST.get('userID'))
    publicToken = request.POST.get('publicToken')

    # Get User Object
    currUser = CustomUser.objects.get(pk=userID)

    # Retrieve access Token
    res = client.Item.public_token.exchange(publicToken)
    accessToken = res['access_token']

    allAccounts = client.Accounts.get(accessToken)["accounts"]

    for account in allAccounts:
        newAccount = Account(
            accountID=account["account_id"],
            currentBalance=account["balances"]["current"],
            name=account["name"],
            type=account["type"],
            user=currUser)
        newAccount.save()

    # Check if user already has access token

    # Save permanent access token for user
    newPlaidToken = PlaidToken.objects.create(
        accessToken=accessToken,
        user=currUser)
    newPlaidToken.save()

    syncTransactions(accessToken)


def syncTransactions(accessToken):

    res = client.Transactions.get(
        accessToken, start_date='2021-04-19', end_date='2021-05-18')

    transactions = res['transactions']

    while len(transactions) < res['total_transactions']:
        res = client.Transactions.get(
            accessToken, start_date='2021-04-19', end_date='2021-05-18', offset=len(transactions))
        transactions.extend(res['transactions'])

    for transaction in transactions:
        currAccount = Account.objects.get(accountID=transaction["account_id"])

        newTransaction = Transaction.objects.create(
            transactionID=transaction["transaction_id"],
            amount=transaction["amount"],
            date=transaction["date"],
            categoryID=transaction["category_id"],
            merchantName=transaction["name"],
            merchantLocation=transaction["location"]["city"],
            account=currAccount
        )
        newTransaction.save()
