from django.contrib import admin

# Register your models here.
from cases.models import Case, Category, Review, SEOCase


class SEOCaseInline(admin.StackedInline):
    model = SEOCase


class CaseAdmin(admin.ModelAdmin):
    inlines = (SEOCaseInline, )


class ReviewAdmin(admin.ModelAdmin):

    fieldsets = (
        ('General', {'fields': ('case', 'image', 'name', 'position', 'text')}),
        ('UA', {'fields': ('name_uk', 'position_uk', 'text_uk')}),
        ('RU', {'fields': ('name_ru', 'position_ru', 'text_ru')}),
        ('EN', {'fields': ('name_en', 'position_en', 'text_en')}),
    )


admin.site.register(Case, CaseAdmin)
admin.site.register(Category)
admin.site.register(Review, ReviewAdmin)
