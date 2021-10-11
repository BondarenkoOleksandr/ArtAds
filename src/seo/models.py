from django.contrib.contenttypes.fields import GenericForeignKey
from django.db import models

# Create your models here.
from tinymce.models import HTMLField


class SEO(models.Model):
    seo_title = models.CharField(max_length=500, null=True, blank=True)
    seo_description = HTMLField(max_length=500, null=True, blank=True)
    seo_canonical = models.URLField(null=True, blank=True)
    seo_robots = models.CharField(max_length=500, null=True, blank=True)
    seo_schema = HTMLField(null=True, blank=True)
    seo_og = HTMLField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "SEO"
