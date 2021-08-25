from django.contrib.auth.views import LogoutView
from django.urls import path, include

from app.views import FirstPageView, ContactsPageView, AboutPageView, PrivacyPageView

from django.conf.urls import handler404, handler500, handler403, handler400

urlpatterns = [
    path('', FirstPageView.as_view(), name='index'),
    path('cases/', include('cases.urls'), name='cases'),
    path('services/', include('services.urls'), name='services'),
    path('accounts/', include('allauth.urls')),
    path('logout', LogoutView.as_view()),
    path('articles/', include('articles.urls'), name='articles'),
    path('contacts/', ContactsPageView.as_view(), name='contacts'),
    path('privacy/', PrivacyPageView.as_view(), name='privacy'),
    path('about/', AboutPageView.as_view(), name='about'),
]

