from django.core.mail import send_mail
from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import TemplateView

from articles.models import Article
from cases.models import Case, Review
from employees.models import Employee


class FirstPageView(TemplateView):
    def get(self, request):
        cases = Case.objects.all().select_related('category')
        articles = Article.objects.all().select_related('category')
        reviews = Review.objects.all()
        return render(
            request=request,
            template_name='index.html',
            context={
                'cases': cases,
                'articles': articles,
                'reviews': reviews
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
        employees = Employee.objects.all().select_related('user')

        return render(
            request=request,
            template_name='about.html',
            context={
                'employees': employees,
            }
        )


class PrivacyPageView(TemplateView):
    def get(self, request):
        return render(
            request=request,
            template_name='privacy.html',
        )


class SendEmailView(TemplateView):
    def post(self, request):
        data = 'Name: '+request.POST.get('name', '') + '\n' + 'Email: ' + request.POST.get('email', '')
        if request.POST.get('phone', ''):
            data += '\n' + 'Phone' + request.POST.get('phone', '')

        if request.POST.get('question', ''):
            data += '\n' + 'Question: ' + request.POST.get('question', '')



        send_mail('Заявка с сайта ArtAds!', data, "ArtAds Agency",
                  ['backend@artads.agency'], fail_silently=False)

        if send_mail:
            data = {'success': 1}
        else:
            data = {'success': 0}

        return JsonResponse(data)


def error_404(request, exception):
    return render(request, 'errors/404.html', status=404)


def error_500(request, *args, **argv):
    return render(request, 'errors/404.html', status=500)

