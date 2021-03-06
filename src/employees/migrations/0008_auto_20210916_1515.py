# Generated by Django 3.2.6 on 2021-09-16 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0007_rename_socialnetworks_socialnetwork'),
    ]

    operations = [
        migrations.AddField(
            model_name='socialaccount',
            name='logo',
            field=models.ImageField(blank=True, null=True, upload_to='social_logos/'),
        ),
        migrations.AddField(
            model_name='socialaccount',
            name='title',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.DeleteModel(
            name='SocialNetwork',
        ),
    ]
