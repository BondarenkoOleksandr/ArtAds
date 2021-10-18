from datetime import date, datetime

from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.utils.translation import gettext as _

# Create your views here.
from django.urls import reverse_lazy, reverse
from django.views.generic import DetailView, ListView, CreateView

from articles.forms import CommentCreateForm, ArticleRatingCreateForm
from articles.models import Article, ArticleViews, Comment, ArticleRating
from core.utils import get_client_ip


class ArticleListView(ListView):
    model = Article
    context_object_name = 'articles'
    template_name = 'articles/articles.html'

    def get(self, request):
        categories = Article.objects.all().distinct('category')
        categories = [art.category for art in categories]
        articles = Article.objects.all().select_related('author', 'category').prefetch_related('likes')

        return render(
            request=request,
            template_name='articles/articles.html',
            context={
                'categories': categories,
                'articles': articles,
            }
        )


class ArticleDetailView(DetailView):
    model = Article

    def get(self, request, slug):
        article = Article.objects.filter(slug=slug).prefetch_related('likes')
        article = article.first()
        reading_time = (len(article.text_before_quote.split()) + len(article.text_after_quote.split()) + len(
            article.quote.split())) / 150
        reading_time = 1 if reading_time < 1 else reading_time
        comments = Comment.objects.filter(status=1, parent=None, article__slug=article.slug).select_related('user',
                                                                                                            'article',
                                                                                                            'parent')

        time_after_publish = article.publish_date

        ArticleViews.objects.get_or_create(IPAddres=get_client_ip(request), article=article)
        if request.user.is_authenticated:
            art_rating = ArticleRating.objects.filter(user=request.user, article=article).first()
        else:
            art_rating = ArticleRating.objects.filter(article=article).first()

        if art_rating:
            current_rating = art_rating.get_rating
            count_of_voices = art_rating.get_count
        else:
            current_rating = 0
            count_of_voices = 0

        similar_articles = Article.objects.exclude(slug=slug).order_by('publish_date').select_related(
            'category').values('category__title', 'image__photo', 'publish_date', 'author__first_name', 'author__last_name',
                               'text_before_quote', 'slug')[:3]

        return render(
            request=request,
            template_name='articles/article.html',
            context={
                'article': article,
                'similar_articles': similar_articles,
                'comments': comments,
                'time_after_publish': time_after_publish,
                'current_rating': current_rating,
                'count_of_voices': count_of_voices,
                'reading_time': round(reading_time),
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


class ArticleRatingCreateView(LoginRequiredMixin, CreateView):
    model = ArticleRating
    form_class = ArticleRatingCreateForm

    def post(self, request):
        article = Article.objects.get(id=request.POST.get('article_id', None))
        rating = request.POST.get('rating', None)

        current_rating = False

        if request.user.is_authenticated:
            current_rating = ArticleRating.objects.filter(article=article, user=request.user).first()

        if current_rating:
            current_rating.rating = rating
            current_rating.save()
            data = {'success': True, 'avarage_rating': current_rating.get_rating, 'count': current_rating.get_count}
        else:
            form = ArticleRatingCreateForm({'article': article, 'rating': rating, 'user': request.user})

            if form.is_valid():
                form.save()
                data = {'success': True, 'avarage_rating': form.instance.get_rating, 'count': form.instance.get_count}
            else:
                return HttpResponse(form.errors.as_json(), status=400)
                # return JsonResponse(data=form.errors.as_json(), status=500)

        return JsonResponse(data)
