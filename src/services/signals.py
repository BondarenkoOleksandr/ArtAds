from autoslug.utils import slugify
from django.db.models.signals import post_save
from django.dispatch import receiver
from google_trans_new import google_translator

from services.models import ServiceArticle


@receiver(post_save, sender=ServiceArticle)
def save_lesson(sender, instance, created, **kwargs):
    if created:
        translator = google_translator()
        value = translator.translate(instance.title, lang_tgt='en')
        instance.slug = slugify(value)
        instance.save()
