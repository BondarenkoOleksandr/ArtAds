# Generated by Django 3.2.6 on 2021-08-12 21:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0003_skills'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Skills',
            new_name='Skill',
        ),
    ]
