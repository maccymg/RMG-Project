from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .serializers.populated import PopulatedArtTypeSerializer
from .models import ArtType

class ArtTypeListView(APIView):

    def get(self, _request):
        art_types = ArtType.objects.all()
        serialized_arts_types = PopulatedArtsTypeSerializer(art_types, many=True)
        return Response(serialized_arts_types.data, status=status.HTTP_200_OK)

class ArtTypeDetailView(APIView):

    def get(self, _request, pk):
        try:
            art_type = ArtType.objects.get(pk=pk)
            serialized_art_types = PopulatedArtTypeSerializer(art_type)
            return Response(serialized_art_types.data, status=status.HTTP_200_OK)
        except ArtType.DoesNotExist:
            raise NotFound()
