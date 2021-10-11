import ArtAds.translation
from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin

# Register your models here.
from articles.models import Article, Comment, ArticleCategory, SEO


class CommentAdmin(admin.ModelAdmin):
    search_fields = ['status', 'article__title']
    ordering = ('status',)
    list_per_page = 10
    list_display = ('article', 'status', 'text', 'parent')


class SEOInlines(admin.TabularInline):
    model = SEO


class ArticleAdmin(TabbedTranslationAdmin):
    search_fields = ['title']
    list_per_page = 10
    inlines = (SEOInlines, )


class ArticleCategoryAdmin(TabbedTranslationAdmin):
    pass


admin.site.register(Article, ArticleAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(ArticleCategory, ArticleCategoryAdmin)
