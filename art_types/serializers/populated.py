from art.serializers.common import ArtSerializer
from ..serializers.common import ArtTypeSerializer

class PopulatedArtTypeSerializer(ArtTypeSerializer):

    art = ArtSerializer(many=True)