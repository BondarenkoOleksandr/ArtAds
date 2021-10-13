from modeltranslation.translator import translator, TranslationOptions
from articles.models import Article, ArticleCategory
from employees.models import Employee, Skill
from services.models import ServiceArticle, WorkPoint, ServiceCategory


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


translator.register(Article, ArticleTranslationOptions)
translator.register(WorkPoint, WorkPointTranslationOptions)
translator.register(ServiceArticle, ServiceArticleTranslationOptions)
translator.register(ServiceCategory, ServiceTranslationOptions)
translator.register(Employee, EmployeesTranslationOptions)
translator.register(Skill, EmployeeSkillsTranslationOptions)
translator.register(ArticleCategory, ArticleCategoryTranslationOptions)
