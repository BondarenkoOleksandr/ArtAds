# Generated by Django 3.2.6 on 2021-10-06 13:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0009_rename_socialaccount_socialnetwork'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='name_en',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='employee',
            name='name_ru',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='employee',
            name='name_uk',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='employee',
            name='position_en',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='employee',
            name='position_ru',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='employee',
            name='position_uk',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='employee',
            name='surname_en',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='employee',
            name='surname_ru',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='employee',
            name='surname_uk',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='skill',
            name='text_en',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AddField(
            model_name='skill',
            name='text_ru',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AddField(
            model_name='skill',
            name='text_uk',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='skill',
            name='employee',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='skills', to='employees.employee'),
        ),
    ]
