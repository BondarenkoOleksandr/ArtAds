from gallery.models import Photo


def upload_photo_to_gallery(queryset):
    for model in queryset:
        Photo.objects.get_or_create(photo=model.image,
                                    title='Review '+model.name+'.',
                                    alt='Review '+model.name+'.',
                                    title_ru='Review '+model.name+'.',
                                    alt_ru='Review '+model.name+'.')
