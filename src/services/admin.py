from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin, TranslationTabularInline

import ArtAds.translation

# Register your models here.
from seo.models import SEO
from services.models import ServiceArticle, ServiceCategory, WorkPoint


class WorkPointInline(TranslationTabularInline):
    model = WorkPoint


class ServiceArticleAdmin(TabbedTranslationAdmin):
    inlines = (WorkPointInline, )


# class WorkPointAdmin(TabbedTranslationAdmin):
#     pass


admin.site.register(ServiceArticle, ServiceArticleAdmin)
# admin.site.register(WorkPoint, ServiceArticleAdmin)
admin.site.register(ServiceCategory)
