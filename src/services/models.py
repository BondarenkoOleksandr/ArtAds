from django.db import models

# Create your models here.
from django.utils.text import slugify


class ServiceArticle(models.Model):
    title = models.CharField(max_length=100, null=True)
    slug = models.SlugField(
        default='',
        max_length=100,
        editable=False,
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
        related_name='category',
        on_delete=models.SET_NULL,
    )
    slug = models.SlugField(
        default='',
        max_length=100,
        editable=False,
        verbose_name='Category slug'
    )

    class Meta:
        verbose_name_plural = 'Service'

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        value = self.name
        self.slug = slugify(value, allow_unicode=True)
        super().save(*args, **kwargs)

    def get_slug(self):
        return self.slug


class WorkPoint(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    service = models.ForeignKey(
        to=ServiceArticle,
        null=False,
        on_delete=models.CASCADE,
        verbose_name='What will we do:',
        related_name='workpoints',
    )
