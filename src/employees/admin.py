from django.contrib import admin

# Register your models here.
from django.contrib.admin import StackedInline
from modeltranslation.admin import TabbedTranslationAdmin, TranslationTabularInline, TranslationStackedInline

from employees.models import Employee, Skill, SocialNetwork


class SkillsInline(TranslationStackedInline):
    model = Skill


class SocialAccountInline(StackedInline):
    model = SocialNetwork


class EmployeeAdmin(TabbedTranslationAdmin):
    inlines = (SkillsInline, SocialAccountInline)


admin.site.register(Employee, EmployeeAdmin)
