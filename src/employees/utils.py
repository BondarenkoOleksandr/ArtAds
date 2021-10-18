from gallery.models import Photo


def upload_photo_to_gallery(queryset):
    for model in queryset:
        Photo.objects.get_or_create(photo=model.image,
                                    title=model.name+' '+model.surname+'.',
                                    alt=model.name+' '+model.surname+'.',
                                    title_ru=model.name+' '+model.surname+'.',
                                    alt_ru=model.name+' '+model.surname+'.')
