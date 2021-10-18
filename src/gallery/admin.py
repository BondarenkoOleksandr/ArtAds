from django.contrib import admin

# Register your models here.
from modeltranslation.admin import TabbedTranslationAdmin

from gallery.models import Photo


class PhotoAdmin(TabbedTranslationAdmin):
    fields = ('image_tag', 'photo', 'alt', 'title', )
    readonly_fields = ('image_tag',)
    list_display = ('image_tag', 'alt', 'title')
    list_per_page = 10
    search_fields = ('alt', 'title')


admin.site.register(Photo, PhotoAdmin)
