from django.contrib import admin
from .models import RecursiveList
# Register your models here.
@admin.register(RecursiveList)

# class ItemAdmin(admin.ModelAdmin):
#     pass

class RecursiveListAdmin(admin.ModelAdmin):
    pass



