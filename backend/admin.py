from backend.models import Account, Transaction
from django.contrib import admin

# Register your models here.

admin.register(
    Account,
    Transaction
)
