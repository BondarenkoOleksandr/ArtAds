from django.urls import path

from articles.views import ArticleDetailView, ArticleListView, CommentCreateView, article_like, ArticleRatingCreateView, \
    article_repost_facebook, article_repost_telegram, article_repost_twitter

app_name = 'articles'

urlpatterns = [
    path('', ArticleListView.as_view(), name='list'),
    path('<slug:slug>/', ArticleDetailView.as_view(), name='article'),
    path('<slug:slug>/create_comment', CommentCreateView.as_view(), name='create_comment'),
    path('<slug:slug>/like', article_like, name="like"),
    path('<slug:slug>/twitter', article_repost_twitter, name="twitter"),
    path('<slug:slug>/facebook', article_repost_facebook, name="facebook"),
    path('<slug:slug>/telegram', article_repost_telegram, name="telegram"),
    path('voice', ArticleRatingCreateView.as_view(), name="voice"),
]
