from django.contrib.auth.views import LogoutView
from django.urls import path, include

from app.views import FirstPageView, ContactsPageView, AboutPageView, PrivacyPageView

urlpatterns = [
    path('', FirstPageView.as_view(), name='index'),
    path('cases/', include('cases.urls'), name='cases'),
    path('services/', include('services.urls'), name='services'),
    path('contacts/', ContactsPageView.as_view(), name='contacts'),
    path('accounts/', include('allauth.urls')),
    path('logout', LogoutView.as_view()),
    path('about/', AboutPageView.as_view(), name='about'),
    path('privacy/', PrivacyPageView.as_view(), name='privacy'),
    path('articles/', include('articles.urls'), name='articles')
]

handler404 = 'app.views.error_404'

