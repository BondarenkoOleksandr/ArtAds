from autoslug.utils import slugify
from django.core.exceptions import ValidationError
from django.db.models.signals import post_save
from django.dispatch import receiver
from google_trans_new import google_translator

from articles.models import Article


@receiver(post_save, sender=Article)
def save_lesson(sender, instance, created, **kwargs):
    if created:
        translator = google_translator()
        value = translator.translate(instance.title, lang_tgt='en')
        instance.slug = slugify(value)
        instance.save()