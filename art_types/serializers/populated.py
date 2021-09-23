from art.serializers.common import ArtSerializer
from ..serializers.common import ArtTypeSerializer

class PopulatedArtTypeSerializer(ArtTypeSerializer):

    art = PictureSerializer(many=True)