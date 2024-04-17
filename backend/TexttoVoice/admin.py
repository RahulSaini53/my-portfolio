from django.contrib import admin
from .models import TexttoVoiceModel

# Register your models here.

@admin.register(TexttoVoiceModel)

class AudioFiles(admin.ModelAdmin):
    list_display=['id','title','audio_file']
