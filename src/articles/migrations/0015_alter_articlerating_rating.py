# Generated by Django 3.2.6 on 2021-08-11 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0014_articlerating_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articlerating',
            name='rating',
            field=models.SmallIntegerField(choices=[(1, 'Very bad'), (2, 'Bad'), (3, 'Normal'), (4, 'Good'), (5, 'Excellent')]),
        ),
    ]