# Generated by Django 3.2.6 on 2021-08-17 02:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0005_review'),
    ]

    operations = [
        migrations.AlterField(
            model_name='case',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='cases', to='cases.category', verbose_name='Case Category'),
        ),
    ]
