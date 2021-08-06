from services.models import ServiceCategory


def add_categories_to_context(request):
    return {
        'services_categories': ServiceCategory.objects.all(),
    }