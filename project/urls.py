from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/art/', include('art.urls')),
    path('api/types/', include('art_types.urls')),
]
