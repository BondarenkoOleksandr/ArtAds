from django.contrib import admin

# Register your models here.

from employees.models import Employee, Skill, SocialNetwork


class SkillsInline(admin.TabularInline):
    model = Skill


class SocialAccountInline(admin.TabularInline):
    model = SocialNetwork


class EmployeeAdmin(admin.ModelAdmin):
    inlines = (SkillsInline, SocialAccountInline)


admin.site.register(Employee, EmployeeAdmin)
