from django.shortcuts import render

# Create your views here.
from django.views.generic import DetailView

from cases.models import Case
from services.models import ServiceArticle


class ServicesDetailView(DetailView):
    model = ServiceArticle

    def get(self, request, slug):
        article = ServiceArticle.objects.get(slug=slug)
        cases = Case.objects.all()
        return render(
            request=request,
            template_name='services/service.html',
            context={
                'article': article,
                'cases': cases,
            }
        )

