#!/bin/bash

python src/manage.py runserver --settings=ArtAds.settings.${MODE} 0:${WSGI_PORT}