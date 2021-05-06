from .base import *
import django_heroku

django_heroku.settings(locals(), staticfiles=False)

ALLOWED_HOSTS = ['https://ledger-plaid.herokuapp.com/']

# Email Settings

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'abidrais1843@gmail.com'
EMAIL_HOST_PASSWORD = 'bdzqdwxkovydpfsi'
EMAIL_USE_TLS = True
