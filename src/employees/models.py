
from django.db import models
from PIL import Image


# Create your models here.
from tinymce.models import HTMLField

from users.models import User


class Employee(models.Model):
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
        related_name="employee"
    )
    name = models.CharField(max_length=100, null=True)
    surname = models.CharField(max_length=100, null=True)
    image = models.ImageField(null=True, default='default.jpg', upload_to='pics/')
    position = models.CharField(max_length=200, null=True)

    def save(self):
        super().save()

        image = Image.open(self.image)
        image.thumbnail((300, 300), Image.ANTIALIAS)
        image.save(self.image.path)

    def __str__(self):
        return self.user.username


class Skill(models.Model):
    text = HTMLField(null=True, max_length=3000)
    employee = models.OneToOneField(Employee, on_delete=models.CASCADE, related_name='skills')


class SocialNetwork(models.Model):
    link = models.URLField()
    title = models.CharField(max_length=100, null=True)
    logo = models.ImageField(upload_to='social_logos/', null=True, blank=True)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='social_accounts')
