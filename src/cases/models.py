from django.db import models

# Create your models here.
from core.utils import generate_uuid

app_name = 'cases'


class Case(models.Model):
    uuid = models.UUIDField(default=generate_uuid, db_index=True, unique=True)
    title = models.CharField(max_length=450, null=True)
    category = models.ForeignKey(
        to='cases.Category',
        null=True,
        verbose_name='Case Category',
        on_delete=models.SET_NULL,
        related_name='cases',
    )
    mob_image = models.ImageField(default='phone.png', upload_to='cases')
    full_image = models.ImageField(default='default-picture.png', upload_to='cases')
    link = models.URLField(max_length=200, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Cases"


class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Case Categories"

    def __str__(self):
        return self.name


class Review(models.Model):
    case = models.ForeignKey('Case', on_delete=models.SET_NULL, related_name='reviews', null=True)
    name = models.CharField(max_length=100)
    image = models.ImageField(default='default-picture.png', upload_to='reviews/')
    position = models.CharField(max_length=100)
    text = models.TextField(max_length=300)

    def __str__(self):
        return self.name + ' - ' + self.position
