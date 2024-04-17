from django import forms
from .models import TexttoVoiceModel

class TexttoVoiceForm(forms.ModelForm):
    class Meta:
        model = TexttoVoiceModel
        fields = ['title', 'audio_file']