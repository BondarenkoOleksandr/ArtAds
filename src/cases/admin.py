from django.contrib import admin

# Register your models here.
from cases.models import Case, Category, Review, SEOCase


class SEOCaseInline(admin.StackedInline):
    model = SEOCase


class CaseAdmin(admin.ModelAdmin):
    inlines = (SEOCaseInline, )


admin.site.register(Case, CaseAdmin)
admin.site.register(Category)
admin.site.register(Review)
