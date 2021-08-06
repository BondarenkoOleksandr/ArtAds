from django.urls import path

from services.views import ServicesDetailView

app_name = 'services'

urlpatterns = [
    path('<slug:slug>/', ServicesDetailView.as_view(), name='article'),
]
