from rest_framework import serializers
from .models import TexttoVoiceModel

class TexttoVoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model=TexttoVoiceModel
        fields=['id','title','audio_file']