import debug_toolbar
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from app.views import SendEmailView

from ArtAds.settings import base

urlpatterns = [
    path('admin/', admin.site.urls),
    path('__debug__/', include(debug_toolbar.urls)),
    path('tinymce/', include('tinymce.urls')),
    path('', include('app.urls')),
    path('send/', SendEmailView.as_view(), name='send_email'),

]
urlpatterns += i18n_patterns(
    path('', include('app.urls')),
    prefix_default_language=False
)

urlpatterns += static(base.MEDIA_URL, document_root=base.MEDIA_ROOT)

handler404 = 'app.views.error_404'
