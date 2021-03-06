from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/arts/', include('art.urls')),
    path('api/types/', include('art_types.urls')),
    re_path(r'^.*$', index)
]
