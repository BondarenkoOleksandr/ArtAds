from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import TemplateView

from services.models import ServiceCategory


class FirstPageView(TemplateView):
    def get(self, request):
        return render(
            request=request,
            template_name='index.html',
        )

class ContactsPageView(TemplateView):
    def get(self, request):
        return render(
            request=request,
            template_name='contacts.html',
        )
