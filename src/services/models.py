from django.core.exceptions import ValidationError
from django.db import models
from tinymce.models import HTMLField

# Create your models here.
from django.utils.text import slugify

from seo.models import SEO


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
    text = HTMLField(null=True)


    def __str__(self):
        return self.title

    def clean(self):
        if not self.slug and ServiceArticle.objects.filter(title=self.title):
            raise ValidationError('Service Article with this title already exists')

    class Meta:
        verbose_name_plural = 'Service Articles'

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
        verbose_name_plural = 'Services'

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


class SEOService(models.Model):
    service_article = models.OneToOneField(ServiceArticle, on_delete=models.CASCADE, null=True)
    seo_title = models.CharField(max_length=500, null=True, blank=True)
    seo_description = models.TextField(null=True, blank=True)
    seo_canonical = models.URLField(null=True, blank=True)
    seo_robots = models.CharField(max_length=500, null=True, blank=True)
    seo_schema = models.TextField(null=True, blank=True)
    seo_og = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "SEO"
