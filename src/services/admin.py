from django.contrib import admin

# Register your models here.
from services.models import ServiceArticle, ServiceCategory

admin.site.register(ServiceArticle)
admin.site.register(ServiceCategory)