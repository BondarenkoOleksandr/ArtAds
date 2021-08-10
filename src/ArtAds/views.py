from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import TemplateView

from articles.models import Article
from cases.models import Case


class FirstPageView(TemplateView):
    def get(self, request):
        cases = Case.objects.all()
        articles = Article.objects.all().select_related('category')
        return render(
            request=request,
            template_name='index.html',
            context={
                'cases': cases,
                'articles': articles,
            }
        )


class ContactsPageView(TemplateView):
    def get(self, request):
        return render(
            request=request,
            template_name='contacts.html',
        )


class AboutPageView(TemplateView):
    def get(self, request):
        return render(
            request=request,
            template_name='about.html',
        )


class PrivacyPageView(TemplateView):
    def get(self, request):
        return render(
            request=request,
            template_name='privacy.html',
        )

def error_404(request, exception):
   context = {}
   return render(request,'errors/404.html', context)
