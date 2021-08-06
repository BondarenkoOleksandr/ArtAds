from django.db import models


# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=100)
    publish_date = models.DateField(auto_now=True)
    page_views = models.IntegerField(default=0)
    rating = models.IntegerField(default=0)