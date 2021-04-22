from django.db import models


class Account(models.Model):
    accountUID = models.AutoField(verbose_name="Account UID", primary_key=True)

    accountID = models.CharField(verbose_name="Account ID", max_length=25)
    currentBalance = models.DecimalField(
        verbose_name="Current Balance", max_digits=9, decimal_places=2)
    name = models.CharField(verbose_name="Account Name", max_length=50)
    type = models.CharField(verbose_name="Account Type", max_length=25)

    def __str__(self) -> str:
        return self.accountID


class Transaction(models.Model):
    transactionUID = models.AutoField(
        verbose_name="Transaction UID", primary_key=True)

    transactionID = models.CharField(
        verbose_name="Transaction ID", max_length=50)
    amount = models.DecimalField(
        verbose_name="Transaction Amount", max_digits=9, decimal_places=2)
    date = models.DateField(verbose_name="Transaction Date",
                            auto_now=False, auto_now_add=False)
    categoryID = models.CharField(
        verbose_name="Transaction Category ID", max_length=50)

    merchantName = models.CharField(
        verbose_name="Merchant Name", max_length=50)
    merchantLocation = models.CharField(
        verbose_name="Merchant Location", max_length=50)

    account = models.ForeignKey(
        Account, related_name="transactions", on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.transactionID
