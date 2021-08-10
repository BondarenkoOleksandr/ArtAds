from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView

from cases.models import Case, Category, Review


class CasesListView(ListView):
    model = Case
    context_object_name = 'cases'

    def get(self, request):
        categories = Category.objects.all()
        cases = Case.objects.all()
        reviews = Review.objects.all()
        return render(
            request=request,
            template_name='cases/case.html',
            context={
                'categories': categories,
                'cases': cases,
                'reviews': reviews,
            }
        )

