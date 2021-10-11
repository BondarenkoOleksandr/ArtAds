from django.db import models

# Create your models here.
from tinymce.models import HTMLField


class SEO(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    seo_title = models.CharField(max_length=500, null=True, blank=True)
    seo_description = HTMLField(max_length=500, null=True, blank=True)
    seo_canonical = models.URLField(null=True, blank=True)
    seo_robots = models.CharField(max_length=500, null=True, blank=True)
    seo_schema = HTMLField(null=True, blank=True)
    seo_og = HTMLField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "SEO"
