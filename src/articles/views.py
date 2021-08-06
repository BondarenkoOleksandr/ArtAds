from django.shortcuts import render

# Create your views here.
from django.views.generic import DetailView

from articles.models import Article


class ArticleDetailView(DetailView):
    model = Article
