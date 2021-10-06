from ArtAds.settings.base import *


DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ['DB_NAME'],
        'HOST': os.environ['DB_HOST'],
        'USER': os.environ['DB_USER'],
        'PASSWORD': os.environ['DB_PASSWORD'],
    }
}

DEFAULT_FROM_EMAIL = 'backend@artads.agency'
SERVER_EMAIL = 'backend@artads.agency'
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = os.environ['EMAIL_HOST_USER']
EMAIL_HOST_PASSWORD = os.environ['EMAIL_HOST_PASSWORD']

ALLOWED_HOSTS = ['185.233.116.108', 'art-ads.agency', 'artads.agency', 'www.artads.agency', 'temp.artads.agency']

MEDIA_ROOT = '/var/www/artads/media'
STATIC_ROOT = '/var/www/artads/static'

EMAIL_HOST_USER = os.environ['EMAIL_HOST_USER']
EMAIL_HOST_PASSWORD = os.environ['EMAIL_HOST_PASSWORD']
