# Generated by Django 3.2.6 on 2021-08-12 03:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0020_auto_20210812_0616'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='title_en',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='title_ru',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='title_uk',
            field=models.CharField(max_length=100, null=True),
        ),
    ]