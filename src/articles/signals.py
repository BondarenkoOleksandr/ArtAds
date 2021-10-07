from autoslug.utils import slugify
from django.core.exceptions import ValidationError
from django.db.models.signals import post_save
from django.dispatch import receiver
from googletrans import Translator

from articles.models import Article


@receiver(post_save, sender=Article)
def save_lesson(sender, instance, created, **kwargs):
    if created:
        translator = Translator()
        value = translator.translate(instance.title)
        instance.slug = slugify(value.text)
        instance.save()
