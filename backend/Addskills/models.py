from django.db import models

# Create your models here.

class Skills(models.Model):
    skill_name = models.CharField(max_length=100)
    profiency=models.IntegerField()
    

