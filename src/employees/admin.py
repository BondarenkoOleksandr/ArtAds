from django.contrib import admin

# Register your models here.
from employees.models import Employee, Skill


class SkillsInline(admin.TabularInline):
    model = Skill


class EmployeeAdmin(admin.ModelAdmin):
    inlines = (SkillsInline,)


admin.site.register(Employee, EmployeeAdmin)
