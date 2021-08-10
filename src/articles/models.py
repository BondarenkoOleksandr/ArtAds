from django.contrib.auth.models import User
from django.db import models
from tinymce.models import HTMLField
from django.utils.text import slugify


# Create your models here.

class Article(models.Model):
    RATING_COUNT = [(i, i) for i in range(1, 6)]
    author = models.ForeignKey(User, related_name='poster', on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(
        to='services.ServiceCategory',
        on_delete=models.SET_NULL,
        null=True,
        related_name='articles'
    )
    image = models.ImageField(default='default-picture.png', upload_to='articles/', null=True)
    title = models.CharField(max_length=100)
    text_before_quote = HTMLField(null=True)
    quote = models.TextField()
    text_after_quote = HTMLField(null=True)
    slug = models.SlugField(
        default='',
        max_length=100,
        editable=False,
        unique=True
    )
    publish_date = models.DateField(auto_now_add=True)
    rating = models.IntegerField(default=0, editable=False)

    def __str__(self):
        return self.title + ' - ' + self.author.username

    def save(self, *args, **kwargs):
        value = self.title
        self.slug = slugify(value, allow_unicode=True)
        super().save(*args, **kwargs)

    @property
    def views_count(self):
        return ArticleViews.objects.filter(article=self).count()

    def get_slug(self):
        return self.slug


class ArticleViews(models.Model):
    IPAddres = models.GenericIPAddressField(default="45.243.82.169")
    article = models.ForeignKey('Article', on_delete=models.CASCADE)

    def __str__(self):
        return '{0} in {1} post'.format(self.IPAddres, self.post.title)


class Comment(models.Model):
    STATUS_LEVEL = [
        (0, 'Moderation'),
        (1, 'Published'),
        (2, 'Archived'),
    ]
    user = models.ForeignKey(User, related_name='author', on_delete=models.SET_NULL, null=True)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, related_name='subcomments')

    status = models.IntegerField(choices=STATUS_LEVEL, default=0)

    text = models.CharField(max_length=250)
    pub_date = models.DateTimeField('date published', auto_now_add=True)

    def __str__(self):
        return self.article.title + ' - ' + self.user.username
