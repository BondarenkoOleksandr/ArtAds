from gallery.models import Photo


def upload_photo_to_gallery(queryset):
    for model in queryset:
        Photo.objects.get_or_create(photo=model.image,
                                    title=model.name+'.',
                                    alt=model.name+'.',
                                    title_ru=model.name+'.',
                                    alt_ru=model.name+'.')
