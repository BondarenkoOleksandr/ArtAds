# Generated by Django 3.2.6 on 2021-08-17 03:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0022_alter_article_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='publish_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
