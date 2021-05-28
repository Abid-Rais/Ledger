from rest_framework.viewsets import ModelViewSet
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponseNotFound

from authentication.models import CustomUser
from Ledger.models import Account, Transaction
from .serializers import AccountSerializer, TransactionSerializer


class AccountFilterViewSet(ModelViewSet):
    """
        This view should return a list of all accounts for the user as 
        determined by the userID portion of the URL. 
    """
    serializer_class = AccountSerializer

    def get_queryset(self):
        userID = self.kwargs['userID']

        currUser = CustomUser.objects.get(pk=userID)

        queryset = Account.objects.filter(user_id=currUser)

        return queryset


class AccountFetchViewSet(ModelViewSet):
    """
        This view should return the associated account as determined by the accountUID portion of the URL 
    """

    serializer_class = AccountSerializer

    def get_queryset(self):
        accountUID = self.kwargs['accountUID']
        return Account.objects.filter(pk=accountUID)


class TransactionFilterViewSet(ModelViewSet):
    """
        This view should return a list of all transactions for the account as 
        determined by the accountID portion of the URL. 
    """
    serializer_class = TransactionSerializer

    def get_queryset(self):

        try:
            accountUID = self.kwargs['accountID']

            if (accountUID == -1):
                return Transaction.objects.all()

            currAccount = Account.objects.get(accountUID=accountUID)

            queryset = Transaction.objects.filter(account=currAccount)

            return queryset

        except ObjectDoesNotExist:
            return HttpResponseNotFound("Not Found")
