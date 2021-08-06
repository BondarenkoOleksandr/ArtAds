from autoslug import AutoSlugField
from django.db import models

# Create your models here.
from django.utils.text import slugify


class ServiceArticle(models.Model):
    title = models.CharField(max_length=100, null=True)
    slug = models.SlugField(
        default='',
        max_length=100,
        verbose_name='Service slug',
        unique=True
    )
    image = models.ImageField(default='default-picture.png', upload_to='services/')
    text = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Service Articles'

    def save(self, *args, **kwargs):
        value = self.title
        self.slug = slugify(value, allow_unicode=True)
        super().save(*args, **kwargs)

    def get_slug(self):
        return self.slug


class ServiceCategory(models.Model):
    name = models.CharField(max_length=100)
    article = models.ForeignKey(
        to='services.ServiceArticle',
        null=True,
        verbose_name='Article',
        on_delete=models.SET_NULL
    )

    class Meta:
        verbose_name_plural = 'Service'

    def __str__(self):
        return self.name
