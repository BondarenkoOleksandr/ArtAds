# Generated by Django 3.2.6 on 2021-08-10 03:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0004_auto_20210805_1847'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(default='default-picture.png', upload_to='reviews/')),
                ('position', models.CharField(max_length=100)),
                ('text', models.TextField(max_length=300)),
                ('case', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='reviews', to='cases.case')),
            ],
        ),
    ]
