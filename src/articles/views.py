from django.shortcuts import render

# Create your views here.
from django.views.generic import DetailView


class ArticleDetailView(DetailView):
    model = Article
