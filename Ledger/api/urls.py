from rest_framework.routers import DefaultRouter

from .views import AccountFilterViewSet, TransactionFilterViewSet

router = DefaultRouter()

router.register(r'account/(?P<userID>\d+)',
                AccountFilterViewSet, basename='account/userID')

router.register(r'transactions/(?P<accountID>\d+)',
                TransactionFilterViewSet, basename='transaction/accountID')

urlpatterns = router.urls
