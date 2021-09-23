from django.urls import path
from .views import ArtTypeListView, ArtTypeDetailView
urlpatterns = [
    path("", ArtTypeListView.as_view()),
    path("<int:pk>/", ArtTypeDetailView.as_view()),
]