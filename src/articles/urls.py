from django.urls import path

from articles.views import ArticleDetailView, ArticleListView, CommentCreateView

app_name = 'articles'

urlpatterns = [
    path('', ArticleListView.as_view(), name='list'),
    path('<slug:slug>/', ArticleDetailView.as_view(), name='article'),
    path('<slug:slug>/create_comment', CommentCreateView.as_view(), name='create_comment'),
]
