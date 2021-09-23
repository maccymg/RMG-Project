from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/arts/', include('art.urls')),
    path('api/types/', include('art_types.urls')),
]
