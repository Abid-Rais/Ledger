from datetime import date
from django.test import TestCase

from authentication.models import CustomUser
from Ledger.models import Account, Transaction


class TestTransaction(TestCase):
    @classmethod
    def setUpTestData(cls):
        testUser = CustomUser.objects.create(
            email="test@gmail.com",
            name="Testing Foo"
        )
        testAccount = Account.objects.create(
            accountID="1",
            currentBalance="6000",
            name="Testing  Foo",
            type="Depository",
            user=testUser
        )
        Transaction.objects.create(
            transactionID="1",
            amount=1000,
            date="2021-05-01",
            categoryID="1",
            merchantName="Apple",
            merchantLocation="New York City",
            account=testAccount
        )

    def setUp(self):
        pass

    def test_transactionID_length(self):
        transaction = Transaction.objects.get(transactionUID=1)
        maxLength = transaction._meta.get_field('transactionID').max_length
        self.assertEqual(maxLength, 50)

    def test_categoryID_length(self):
        transaction = Transaction.objects.get(transactionUID=1)
        maxLength = transaction._meta.get_field('categoryID').max_length
        self.assertEqual(maxLength, 50)

    def test_merchantName_length(self):
        transaction = Transaction.objects.get(transactionUID=1)
        maxLength = transaction._meta.get_field('merchantName').max_length
        self.assertEqual(maxLength, 50)

    def test_merchantLocation_length(self):
        transaction = Transaction.objects.get(transactionUID=1)
        maxLength = transaction._meta.get_field('merchantLocation').max_length
        self.assertEqual(maxLength, 50)

    def test_amount_digits(self):
        transaction = Transaction.objects.get(transactionUID=1)
        maxDigits = transaction._meta.get_field('amount').max_digits
        self.assertEqual(maxDigits, 9)
