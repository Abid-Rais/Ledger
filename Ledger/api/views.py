from rest_framework.viewsets import ModelViewSet

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
        return Account.objects.filter(user_id=userID)


class TransactionFilterViewSet(ModelViewSet):
    """
        This view should return a list of all transactions for the account as 
        determined by the accountID portion of the URL. 
    """
    serializer_class = TransactionSerializer

    def get_queryset(self):
        accountUID = self.kwargs['accountID']
        return Transaction.objects.filter(account_accountUID=accountUID)
