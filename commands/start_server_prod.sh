#!/bin/bash

gunicorn -w ${WSGI_WORKERS} -b 0:${WSGI_PORT} --chdir ./src ArtAds.wsgi:application
