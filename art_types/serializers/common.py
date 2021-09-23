from rest_framework import serializers
from ..models import ArtType

class ArtTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtType
        fields = '__all__'