from django.db import models

from users.models import User


class ArticleRepostBase(models.Model):
    article = models.ForeignKey('articles.Article', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        abstract = True
