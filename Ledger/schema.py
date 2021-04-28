from graphene import ObjectType, Schema, List
from graphene_django import DjangoObjectType
from graphql_auth import mutations
from graphql_auth.schema import UserQuery, MeQuery

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


class Query(UserQuery, MeQuery, ObjectType):
    allTransactions = List(TransactionType)

    def resolveAllTransactions(root, info):
        return Transaction.objects.select_related("account").all()


class AuthMutation(ObjectType):
    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    resend_activation_email = mutations.ResendActivationEmail.Field()
    send_password_reset_email = mutations.SendPasswordResetEmail.Field()
    password_reset = mutations.PasswordReset.Field()
    password_change = mutations.PasswordChange.Field()
    archive_account = mutations.ArchiveAccount.Field()
    delete_account = mutations.DeleteAccount.Field()
    update_account = mutations.UpdateAccount.Field()
    send_secondary_email_activation = mutations.SendSecondaryEmailActivation.Field()
    verify_secondary_email = mutations.VerifySecondaryEmail.Field()
    swap_emails = mutations.SwapEmails.Field()

    # django-graphql-jwt inheritances
    token_auth = mutations.ObtainJSONWebToken.Field()
    verify_token = mutations.VerifyToken.Field()
    refresh_token = mutations.RefreshToken.Field()
    revoke_token = mutations.RevokeToken.Field()


class Mutation(AuthMutation, ObjectType):
    pass


schema = Schema(query=Query, mutation=Mutation)
