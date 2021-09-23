from .models import Art
from .serializers.common import ArtSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

class ArtListView(APIView):

    def get(self, _request):
        arts = Art.objects.all()
        serialized_arts = ArtSerializer(arts, many=True)
        return Response(serialized_arts.data, status=status.HTTP_200_OK)


class ArtDetailView(APIView):

    def get(self, _request, pk):
        try:
            art = Art.objects.get(pk=pk)
            serialized_arts = ArtSerializer(art)
            return Response(serialized_arts.data, status=status.HTTP_200_OK)
        except Art.DoesNotExist:
            raise NotFound()
