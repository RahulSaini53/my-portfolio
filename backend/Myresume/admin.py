from django.contrib import admin
from .models import Myprojects,MyExperience
# Register your models here.
@admin.register(Myprojects,MyExperience)

class MyProjects(admin.ModelAdmin):
    pass

class MyExperience(admin.ModelAdmin):
    pass
