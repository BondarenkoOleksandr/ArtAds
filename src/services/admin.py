from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

import ArtAds.translation

# Register your models here.
from services.models import ServiceArticle, ServiceCategory, WorkPoint


class WorkPointInline(admin.TabularInline):
    model = WorkPoint


class ServiceAricleAdmin(TranslationAdmin):
    inlines = (WorkPointInline,)


admin.site.register(ServiceArticle, ServiceAricleAdmin)
admin.site.register(ServiceCategory)
