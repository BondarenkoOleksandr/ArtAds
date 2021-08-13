from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin

import ArtAds.translation

# Register your models here.
from services.models import ServiceArticle, ServiceCategory, WorkPoint


class WorkPointInline(admin.TabularInline):
    model = WorkPoint


class ServiceArticleAdmin(TabbedTranslationAdmin):
    inlines = (WorkPointInline,)


# class WorkPointAdmin(TabbedTranslationAdmin):
#     pass


admin.site.register(ServiceArticle, ServiceArticleAdmin)
# admin.site.register(WorkPoint, ServiceArticleAdmin)
admin.site.register(ServiceCategory)
