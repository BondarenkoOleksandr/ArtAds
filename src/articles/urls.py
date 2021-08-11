from django.urls import path

from articles.views import ArticleDetailView, ArticleListView, CommentCreateView, article_like, ArticleRatingCreateView

app_name = 'articles'

urlpatterns = [
    path('', ArticleListView.as_view(), name='list'),
    path('<slug:slug>/', ArticleDetailView.as_view(), name='article'),
    path('<slug:slug>/create_comment', CommentCreateView.as_view(), name='create_comment'),
    path('<slug:slug>/like', article_like, name="like"),
    path('voice', ArticleRatingCreateView.as_view(), name="voice"),
]
