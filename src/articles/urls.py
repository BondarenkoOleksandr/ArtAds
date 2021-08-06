from django.urls import path

app_name = 'articles'

urlpatterns = [
    path('<slug:slug>/', ArticleDetailView.as_view(), name='article'),
]
