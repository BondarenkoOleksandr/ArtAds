from django.urls import path

from cases.views import CasesListView

app_name = 'cases'

urlpatterns = [
    path('', CasesListView.as_view(), name='list_'),
]
