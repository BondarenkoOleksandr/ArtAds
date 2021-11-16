from ArtAds.settings import base
from services.models import ServiceCategory


def add_categories_to_context(request):
    return {
        'services_categories': ServiceCategory.objects.all().prefetch_related('article'),
    }

def default_language(request):
    return{
        'DEFAULT_LANGUAGE': base.LANGUAGE_CODE
    }