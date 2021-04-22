from graphene import ObjectType, Schema, List
from graphene_django import DjangoObjectType

from backend.models import Account, Transaction


class AccountType(DjangoObjectType):
    class Meta:
        model = Account
        fields = ("accountUID",  "accountID", "currentBalance", "name", "type")


class TransactionType(DjangoObjectType):
    class Meta:
        model = Transaction
        fields = ("transactionUID", "transactionID", "amount", "date",
                  "categoryID", "merchantName", "merchantLocation", "account")


class Query(ObjectType):
    allTransactions = List(TransactionType)

    def resolveAllTransactions(root, info):
        return Transaction.objects.select_related("account").all()


schema = Schema(query=Query)
