from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'M67RmEoguWO2O2wIgEMT8d61ZFTnpGqRMsX5y0tEQTT4OzsTAnKIJQVNEoYAAO4GvMQzoWP8RxkrHZd1'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'HOST': "localhost",
        'NAME': "ledgerdb",
        'PORT': 5432,
        'USER': "abidrais",
        'PASSWORD': "",
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
