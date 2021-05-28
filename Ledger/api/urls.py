from django.views.generic import base
from rest_framework.routers import DefaultRouter

from .views import AccountFilterViewSet, TransactionFilterViewSet, AccountFetchViewSet

router = DefaultRouter()

router.register(r'accounts/(?P<userID>\d+)',
                AccountFilterViewSet, basename='accounts/userID')

router.register(r'accounts/fetch/(?P<accountUID>\d+)',
                AccountFetchViewSet, basename='accounts/fetch/accountUID')

router.register(r'transactions/(?P<accountID>\d+)',
                TransactionFilterViewSet, basename='transactions/accountID')

urlpatterns = router.urls
