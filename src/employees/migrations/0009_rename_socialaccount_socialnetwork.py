# Generated by Django 3.2.6 on 2021-09-16 12:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0008_auto_20210916_1515'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='SocialAccount',
            new_name='SocialNetwork',
        ),
    ]
