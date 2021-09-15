
from django.db.models.signals import m2m_changed

from core.utils import moderate_user_role
from src.users.models import User


def handle_m2m_changed(sender, instance, action, **kwargs):
    if action == 'post_add' or action == 'post_remove':
        moderate_user_role(instance)


m2m_changed.connect(handle_m2m_changed, sender=User.groups.through)
