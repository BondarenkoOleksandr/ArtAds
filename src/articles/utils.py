from gallery.models import Photo


def upload_photo_to_gallery(queryset):
    for model in queryset:
        Photo.objects.get_or_create(photo=model.image, title=model.title, alt=model.title)
        Photo.objects.get_or_create(photo=model.bg_image, title='BG -'+model.title, alt='BG -'+model.title)
