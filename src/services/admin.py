from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin, TranslationTabularInline

import ArtAds.translation

# Register your models here.
from services.models import ServiceArticle, ServiceCategory, WorkPoint, SEOService


class WorkPointInline(TranslationTabularInline):
    model = WorkPoint


class SEOServiceInline(admin.StackedInline):
    model = SEOService


class ServiceArticleAdmin(TabbedTranslationAdmin):
    inlines = (WorkPointInline, SEOServiceInline)


# class WorkPointAdmin(TabbedTranslationAdmin):
#     pass


admin.site.register(ServiceArticle, ServiceArticleAdmin)
# admin.site.register(WorkPoint, ServiceArticleAdmin)
admin.site.register(ServiceCategory)
