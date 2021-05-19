from os import name
from rest_framework.routers import DefaultRouter
from django.conf.urls import url

from .views import registerAccount

router = DefaultRouter()

# router.register(r'publicToken', registerAccount, basename="publicToken")

urlpatterns = [
    url(r'publicToken', registerAccount, name == "publicToken")
]


# urlpatterns = router.urls
