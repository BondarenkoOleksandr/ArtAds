from django.contrib.auth.models import User
from django.db import models
from PIL import Image


# Create your models here.

class Employee(models.Model):
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
        related_name="employee"
    )
    image = models.ImageField(null=True, default='default.jpg', upload_to='pics/')
    position = models.CharField(max_length=200, null=True)

    def save(self):
        super().save()

        image = Image.open(self.image)
        image.thumbnail((300, 300), Image.ANTIALIAS)
        image.save(self.image.path)

    def __str__(self):
        return self.user.username