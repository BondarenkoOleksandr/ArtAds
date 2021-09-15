# Generated by Django 3.2.6 on 2021-09-15 07:42

from django.db import migrations, models
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0025_auto_20210914_1821'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='quote_en',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='quote_ru',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='quote_uk',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='text_after_quote_en',
            field=tinymce.models.HTMLField(null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='text_after_quote_ru',
            field=tinymce.models.HTMLField(null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='text_after_quote_uk',
            field=tinymce.models.HTMLField(null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='text_before_quote_en',
            field=tinymce.models.HTMLField(null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='text_before_quote_ru',
            field=tinymce.models.HTMLField(null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='text_before_quote_uk',
            field=tinymce.models.HTMLField(null=True),
        ),
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
