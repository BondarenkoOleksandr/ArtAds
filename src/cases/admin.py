from django.contrib import admin

# Register your models here.
from cases.models import Case, Category, Review

admin.site.register(Case)
admin.site.register(Category)
admin.site.register(Review)