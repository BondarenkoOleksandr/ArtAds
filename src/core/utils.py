import uuid

from employees.models import Employee


def generate_uuid():
    result = uuid.uuid4()
    return result


def moderate_user_role(instance):
    if instance.groups.filter(name='Employee'):
        if not Employee.objects.filter(user=instance):
            obj = Employee(
                user=instance,
            )
            obj.save()
    else:
        if Employee.objects.filter(user=instance):
            Employee.objects.filter(user=instance).delete() \



def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip
