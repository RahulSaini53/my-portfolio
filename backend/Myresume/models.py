from django.db import models

# Create your models here.
class Myprojects(models.Model):
     project_name=models.CharField(max_length=100)
     project_description=models.CharField(max_length=10000)
     tech_used=models.CharField(max_length=1000)
     link_url=models.URLField(max_length=200)

class MyExperience(models.Model):
     job_Title=models.CharField(max_length=200)
     company_name=models.CharField(max_length=200)
     location=models.CharField(max_length=400)
     duration=models.DurationField(max_length=400)
     achievments=models.CharField(max_length=10000)


