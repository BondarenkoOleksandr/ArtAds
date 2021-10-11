from django.contrib import admin

# Register your models here.
from modeltranslation.admin import TabbedTranslationAdmin, TranslationTabularInline

from employees.models import Employee, Skill, SocialNetwork, EmployeeSEO


class SEOInline(admin.TabularInline):
    model = EmployeeSEO


class SkillsInline(TranslationTabularInline):
    model = Skill


class SocialAccountInline(admin.TabularInline):
    model = SocialNetwork


class EmployeeAdmin(TabbedTranslationAdmin):
    inlines = (SkillsInline, SocialAccountInline, SEOInline)


admin.site.register(Employee, EmployeeAdmin)
