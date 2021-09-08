from django import template

register = template.Library()

def clean_link(path):
    if path.startswith('/ru') or path.startswith('/uk') or path.startswith('/en'):
        path = path[3:]
    return path


register.filter('clean_link', clean_link)
