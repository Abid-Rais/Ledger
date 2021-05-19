from django.test import TestCase

from Ledger.models import Account, Transaction
from authentication.models import CustomUser


class AccountFilterViewSetTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        testUser1 = CustomUser.objects.create(
            email="test@gmail.com",
            name="Testing Foo"
        )
        testUser2 = CustomUser.objects.create(
            email="test@hotmail.com",
            name="Testing Moo"
        )
        Account.objects.create(
            accountID="1",
            currentBalance="6000",
            name="Testing  Foo",
            type="Depository",
            user=testUser1
        )
        Account.objects.create(
            accountID="2",
            currentBalance="6000",
            name="Testing  Foo",
            type="Depository",
            user=testUser2
        )
        Account.objects.create(
            accountID="3",
            currentBalance="6000",
            name="Testing  Moo",
            type="Depository",
            user=testUser1
        )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/ledger/api/account/1')
        self.assertEqual(response.status_code, 200)

    # Not sure how to get data from viewsets
    # def test_filter_accounts(self):
    #     response = self.client.get('/ledger/api/account/1')
    #     self.assertEqual(len(response.data), 2)

    #     response = self.client.get('/ledger/api/account/2')
    #     self.assertEqual(response.context_data['total_results'], 1)

    # def test_count_accounts(self):
    #     self.assertEqual(Account.objects.filter(
    #         user=CustomUser.objects.get(pk=1)).count(), 2)
    #     self.assertEqual(Account.objects.filter(
    #         user=CustomUser.objects.get(pk=2)).count(), 1)


class TransactionFilterViewSetTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        testUser1 = CustomUser.objects.create(
            email="test@gmail.com",
            name="Testing Foo"
        )
        testAccount1 = Account.objects.create(
            accountID="1",
            currentBalance="6000",
            name="Testing  Foo",
            type="Depository",
            user=testUser1
        )
        testAccount2 = Account.objects.create(
            accountID="2",
            currentBalance="6000",
            name="Testing  Foo",
            type="Depository",
            user=testUser1
        )

        Transaction.objects.create(
            transactionID="1",
            amount=1000,
            date="2021-05-01",
            categoryID="1",
            merchantName="Apple",
            merchantLocation="New York City",
            account=testAccount1
        )

        Transaction.objects.create(
            transactionID="1",
            amount=1000,
            date="2021-05-01",
            categoryID="1",
            merchantName="Apple",
            merchantLocation="New York City",
            account=testAccount2
        )

        Transaction.objects.create(
            transactionID="1",
            amount=1000,
            date="2021-05-01",
            categoryID="1",
            merchantName="Apple",
            merchantLocation="New York City",
            account=testAccount1
        )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/ledger/api/transactions/1')
        self.assertEqual(response.status_code, 200)
