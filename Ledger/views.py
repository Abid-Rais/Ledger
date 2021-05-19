from django.shortcuts import render
from django.http import JsonResponse
from decouple import config

from authentication.models import CustomUser
from plaid import Client

# Create your views here.

PLAID_CLIENT_ID = config('PLAID_CLIENT_ID')
PLAID_SECRET = config('PLAID_SECRET')
PLAID_ENV = config('PLAID_ENVIRONMENT')
PLAID_REDIRECT_URI = config('PLAID_REDIRECT_URI')

client = Client(client_id=PLAID_CLIENT_ID,
                secret=PLAID_SECRET, environment=PLAID_ENV)


def createLinkToken():
    user = None

    response = client.LinkToken.create({
        'user': {
            'client_user_id': user.id
        },
        'products': ['auth'],
        'client_name': 'Ledger',
        'country_codes': ['US'],
        'language': 'en',
    })

    return JsonResponse(response)
