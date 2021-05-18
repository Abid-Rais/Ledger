from rest_framework.serializers import ModelSerializer

from authentication.serializers import UserCreateSerializer
from Ledger.models import Account, PlaidToken, Transaction


class AccountSerializer(ModelSerializer):
    user = UserCreateSerializer()

    class Meta:
        model = Account
        fields = [
            'accountUID',
            'accountID',
            'currentBalance',
            'name',
            'type',
            'user',
        ]


class TransactionSerializer(ModelSerializer):
    account = AccountSerializer()

    class Meta:
        model = Transaction
        fields = [
            'transactionUID',
            'transactionID',
            'amount',
            'date', 'categoryID',
            'merchantName',
            'merchantLocation',
            'account'
        ]
