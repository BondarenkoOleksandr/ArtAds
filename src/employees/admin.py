from django.contrib import admin

# Register your models here.
from modeltranslation.admin import TabbedTranslationAdmin, TranslationTabularInline

from employees.models import Employee, Skill, SocialNetwork


class SkillsInline(TranslationTabularInline):
    model = Skill


class SocialAccountInline(admin.TabularInline):
    model = SocialNetwork


class EmployeeAdmin(TabbedTranslationAdmin):
    inlines = (SkillsInline, SocialAccountInline)


admin.site.register(Employee, EmployeeAdmin)
