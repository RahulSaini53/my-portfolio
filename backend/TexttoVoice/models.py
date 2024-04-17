from django.db import models

# Create your models here.

class TexttoVoiceModel(models.Model):
    title=models.CharField(max_length=50,default='myaudio1')
    audio_file=models.FileField(upload_to='./videos')


    def __str__(self) -> str:
        return self.title
