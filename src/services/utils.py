from gallery.models import Photo


def upload_photo_to_gallery(queryset):
    for model in queryset:
        Photo.objects.get_or_create(photo=model.image, title=model.title, alt=model.title,
                                    title_ru=model.title, alt_ru=model.title)
