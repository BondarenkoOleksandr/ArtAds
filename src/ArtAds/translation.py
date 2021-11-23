from modeltranslation.translator import translator, TranslationOptions
from articles.models import Article, ArticleCategory, SEOArticle
from cases.models import Review
from employees.models import Employee, Skill, SEOEmployee
from gallery.models import Photo
from services.models import ServiceArticle, WorkPoint, ServiceCategory, SEOService


class ArticleTranslationOptions(TranslationOptions):
    fields = ('title', 'quote', 'text_before_quote', 'text_after_quote',)


class ServiceArticleTranslationOptions(TranslationOptions):
    fields = ('title', 'text')


class ServiceTranslationOptions(TranslationOptions):
    fields = ('name', )


class WorkPointTranslationOptions(TranslationOptions):
    fields = ('title', 'text')


class EmployeesTranslationOptions(TranslationOptions):
    fields = ('name', 'surname', 'position')


class EmployeeSkillsTranslationOptions(TranslationOptions):
    fields = ('text', )


class ArticleCategoryTranslationOptions(TranslationOptions):
    fields = ('title', )


class GalleryTranslationOptions(TranslationOptions):
    fields = ('alt', 'title', )


class ReviewTranslationOptions(TranslationOptions):
    fields = ('name', 'position', 'text', )


class SEOArticleTranslationOptions(TranslationOptions):
    fields = ('seo_title', 'seo_description', 'seo_canonical', 'seo_robots', 'seo_schema', 'seo_og')


class SEOServiceTranslationOptions(TranslationOptions):
    fields = ('seo_title', 'seo_description', 'seo_canonical', 'seo_robots', 'seo_schema', 'seo_og')


class SEOEmployeeTranslationOptions(TranslationOptions):
    fields = ('seo_title', 'seo_description', 'seo_canonical', 'seo_robots', 'seo_schema', 'seo_og')


translator.register(Article, ArticleTranslationOptions)
translator.register(WorkPoint, WorkPointTranslationOptions)
translator.register(ServiceArticle, ServiceArticleTranslationOptions)
translator.register(ServiceCategory, ServiceTranslationOptions)
translator.register(Employee, EmployeesTranslationOptions)
translator.register(Skill, EmployeeSkillsTranslationOptions)
translator.register(ArticleCategory, ArticleCategoryTranslationOptions)
translator.register(Photo, GalleryTranslationOptions)
translator.register(Review, ReviewTranslationOptions)
translator.register(SEOArticle, SEOArticleTranslationOptions)
translator.register(SEOService, SEOServiceTranslationOptions)
translator.register(SEOEmployee, SEOEmployeeTranslationOptions)
