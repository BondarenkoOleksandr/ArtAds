from datetime import date

from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.shortcuts import render, get_object_or_404

# Create your views here.
from django.urls import reverse_lazy, reverse
from django.views.generic import DetailView, ListView, CreateView

from articles.forms import CommentCreateForm
from articles.models import Article, ArticleViews, Comment
from core.utils import get_client_ip


class ArticleListView(ListView):
    model = Article
    context_object_name = 'articles'
    template_name = 'articles/articles.html'

    def get(self, request):
        articles = Article.objects.all().select_related('author', 'category').prefetch_related('likes')

        return render(
            request=request,
            template_name='articles/articles.html',
            context={
                'articles': articles,
            }
        )


class ArticleDetailView(DetailView):
    model = Article

    def get(self, request, slug):
        article = Article.objects.filter(slug=slug).prefetch_related('likes')
        article = article.first()
        comments = Comment.objects.filter(status=1, parent=None, article__slug=article.slug).select_related('user',
                                                                                                            'article',
                                                                                                            'parent')

        time_after_publish = date.today() - article.publish_date

        ArticleViews.objects.get_or_create(IPAddres=get_client_ip(request), article=article)

        similar_articles = Article.objects.exclude(slug=slug).order_by('publish_date').select_related(
            'category').values('category__name', 'image', 'publish_date', 'author__first_name', 'author__last_name',
                               'text_before_quote', 'slug')[:3]

        return render(
            request=request,
            template_name='articles/article.html',
            context={
                'article': article,
                'similar_articles': similar_articles,
                'comments': comments,
                'time_after_publish': time_after_publish,
            }
        )


class CommentCreateView(LoginRequiredMixin, CreateView):
    model = Comment
    form_class = CommentCreateForm
    template_name = 'articles/create-comment.html'
    success_url = reverse_lazy('index')

    def post(self, request, slug):
        parent_id = request.POST.get('parent_id', None)
        form = CommentCreateForm(request.POST, parent_id)

        if form.is_valid():
            form.save()
        else:
            return HttpResponse(form.errors.as_json(), status=400)
            # return JsonResponse(data=form.errors.as_json(), status=500)

        data = {'success': True}

        return JsonResponse(data)


def article_like(request, slug):
    article = get_object_or_404(Article, slug=slug)
    if article.likes.filter(id=request.user.id).exists():
        article.likes.remove(request.user)
    else:
        article.likes.add(request.user)

    data = {'number_of_likes': article.number_of_likes()}

    return JsonResponse(data)
