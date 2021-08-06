from django.contrib import admin

# Register your models here.
from cases.models import Case, Category

admin.site.register(Case)
admin.site.register(Category)