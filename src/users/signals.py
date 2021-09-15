import random

from allauth.socialaccount.models import SocialAccount
from django.core.files.images import ImageFile
from django.db.models.signals import post_save
from django.dispatch import receiver
from PIL import Image
import requests
from io import BytesIO

from users.models import User


@receiver(post_save, sender=SocialAccount)
def save_user(sender, instance, created, **kwargs):
    if created:
        response = requests.get(instance.extra_data['picture'])
        user = User.objects.get(id=instance.user.id)
        user.image.save(user.username + str(random.randint(1, 1000000000)) + '.jpg', ImageFile(BytesIO(response.content)))
        user.save()
