from modeltranslation.translator import translator, TranslationOptions
from articles.models import Article
from services.models import ServiceArticle


class ArticleTranslationOptions(TranslationOptions):
    fields = ('title', 'quote', 'text_before_quote', 'text_after_quote',)


class ServiceArticleTranslationOptions(TranslationOptions):
    fields = ('title', 'text')


translator.register(Article, ArticleTranslationOptions)
translator.register(ServiceArticle, ServiceArticleTranslationOptions)
