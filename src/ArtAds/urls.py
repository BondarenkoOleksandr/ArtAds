import debug_toolbar
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import handler404, handler500, handler403, handler400

from app.views import ContactsPageView, PrivacyPageView, AboutPageView, SendEmailView

from ArtAds.settings import base

urlpatterns = [
    path('admin/', admin.site.urls),
    path('__debug__/', include(debug_toolbar.urls)),
    path('tinymce/', include('tinymce.urls')),
    path('', include('app.urls')),
    path('send/', SendEmailView.as_view(), name='send_email'),
    path("django-check-seo/", include("django_check_seo.urls")),

]
urlpatterns += i18n_patterns(
    path('', include('app.urls'))
)

urlpatterns += static(base.MEDIA_URL, document_root=base.MEDIA_ROOT)

handler404 = 'app.views.error_404'
