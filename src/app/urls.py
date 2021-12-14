from django.contrib.auth.views import LogoutView
from django.urls import path, include
from django.views.decorators.cache import cache_page

from app.views import FirstPageView, ContactsPageView, AboutPageView, PrivacyPageView


urlpatterns = [
    path('', FirstPageView.as_view(), name='index'),
    path('cases/', include('cases.urls'), name='cases'),
    path('services/', include('services.urls'), name='services'),
    path('accounts/', include('allauth.urls')),
    path('logout', LogoutView.as_view()),
    path('articles/', include('articles.urls'), name='articles'),
    path('contacts/', cache_page(60)(ContactsPageView.as_view()), name='contacts'),
    path('privacy/', cache_page(60)(PrivacyPageView.as_view()), name='privacy'),
    path('about/', cache_page(60)(AboutPageView.as_view()), name='about'),
]
