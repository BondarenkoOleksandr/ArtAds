# Generated by Django 3.2.6 on 2021-08-09 19:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0005_rename_quota_article_quote'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='page_views',
        ),
        migrations.CreateModel(
            name='ArticleViews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('IPAddres', models.GenericIPAddressField(default='45.243.82.169')),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.article')),
            ],
        ),
    ]
