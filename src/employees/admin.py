from django.contrib import admin

# Register your models here.
from django.contrib.admin import StackedInline
from modeltranslation.admin import TabbedTranslationAdmin, TranslationTabularInline, TranslationStackedInline

from employees.models import Employee, Skill, SocialNetwork, SEOEmployee


class SkillsInline(TranslationStackedInline):
    model = Skill


class SocialAccountInline(StackedInline):
    model = SocialNetwork


class SEOEmployeeInline(StackedInline):
    model = SEOEmployee


class EmployeeAdmin(TabbedTranslationAdmin):
    inlines = (SkillsInline, SocialAccountInline, SEOEmployeeInline)


admin.site.register(Employee, EmployeeAdmin)
