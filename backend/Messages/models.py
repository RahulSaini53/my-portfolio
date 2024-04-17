from django.db import models

# Create your models here.

class Message(models.Model):
   sender_name = models.CharField(max_length=200)
   sender_email=models.EmailField(max_length=300)
   subject = models.CharField(max_length=300)
   message = models.TextField(max_length=10000)
