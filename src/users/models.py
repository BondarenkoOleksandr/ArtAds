from PIL import Image
from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.


class User(AbstractUser):
    image = models.ImageField(default='user.png', upload_to='users/', null=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        image = Image.open(self.image)
        image.thumbnail((300, 300), Image.ANTIALIAS)
        image.save(self.image.path)
