from .models import Myprojects,MyExperience
from rest_framework import serializers

class MyProjectSerializer(serializers.ModelSerializer):
    class Meta:
         model=Myprojects
         fields='__all__'


class MyExperienceSerializer(serializers.ModelSerializer):
     class Meta:
          model=MyExperience
          fields='__all__'