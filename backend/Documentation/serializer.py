from rest_framework import serializers
from .models import RecursiveList

# class ItemSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=Item
#         fields='__all__'

class RecursiveListSerializer(serializers.ModelSerializer):
    class Meta:
        model=RecursiveList
        fields='__all__'