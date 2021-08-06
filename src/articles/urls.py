from django.urls import path

from articles.views import ArticleDetailView

app_name = 'articles'

urlpatterns = [
    path('<slug:slug>/', ArticleDetailView.as_view(), name='article'),
]
