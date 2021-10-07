from autoslug.utils import slugify
from django.db.models.signals import post_save
from django.dispatch import receiver
from googletrans import Translator

from services.models import ServiceArticle


@receiver(post_save, sender=ServiceArticle)
def save_lesson(sender, instance, created, **kwargs):
    if created:
        translator = Translator()
        value = translator.translate(instance.title)
        value = instance.title
        instance.slug = slugify(value)
        instance.save()
