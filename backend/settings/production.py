from .base import *
import django_heroku
from decouple import config


django_heroku.settings(locals(), staticfiles=False)

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ["ledger.herokuapp.com"]

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': config('DATABASE_ENGINE'),
        'HOST': config('DATABASE_HOST'),
        'NAME': config('DATABASE_NAME'),
        'PORT': config('DATABASE_PORT', cast=int),
        'USER': config('DATABASE_USER'),
        'PASSWORD': config('DATABASE_PASSWORD'),
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'ar5365@nyu.edu'
EMAIL_HOST_PASSWORD = 'bdzqdwxkovydpfsi'
EMAIL_USE_TLS = True
