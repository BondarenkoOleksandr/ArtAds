from django.contrib import admin

# Register your models here.
from services.models import ServiceArticle, ServiceCategory, WorkPoint


class WorkPointInline(admin.TabularInline):
    model = WorkPoint


class ServiceAricleAdmin(admin.ModelAdmin):
    inlines = (WorkPointInline,)


admin.site.register(ServiceArticle, ServiceAricleAdmin)
admin.site.register(ServiceCategory)
