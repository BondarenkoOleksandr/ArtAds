"""ArtAds URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from ArtAds import settings
from ArtAds.views import FirstPageView, ContactsPageView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', FirstPageView.as_view(), name='index'),
    path('cases/', include('cases.urls'), name='cases'),
    path('services/', include('services.urls'), name='services'),
    path('contacts/', ContactsPageView.as_view(), name='contacts'),
    path('i18n/', include('django.conf.urls.i18n')),
]

urlpatterns += \
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

