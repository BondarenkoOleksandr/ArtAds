from django.contrib import admin

# Register your models here.
from articles.models import Article, Comment


class CommentAdmin(admin.ModelAdmin):
    search_fields = ['status', 'article__title']
    ordering = ('status',)
    list_per_page = 10
    list_display = ('article', 'status', 'text', 'parent')

class ArticleAdmin(admin.ModelAdmin):
    search_fields = ['status', 'article__title']
    ordering = ('status',)
    list_per_page = 10
    list_display = ('article', 'status', 'text')


admin.site.register(Article)
admin.site.register(Comment, CommentAdmin)
