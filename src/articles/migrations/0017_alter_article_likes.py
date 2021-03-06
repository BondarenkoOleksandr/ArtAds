# Generated by Django 3.2.6 on 2021-08-11 21:24

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('articles', '0016_auto_20210812_0020'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='likes',
            field=models.ManyToManyField(editable=False, related_name='article_like', to=settings.AUTH_USER_MODEL),
        ),
    ]
