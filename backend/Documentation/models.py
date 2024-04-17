from django.db import models

# Create your models here.

# class Item(models.Model):
#     name = models.CharField(max_length=100)

#     def __str__(self) -> str:
#         return self.name

class RecursiveList(models.Model):
    listid = models.CharField(max_length=100,unique=True)
    # items = models.ManyToManyField(Item, related_name='contained_in')
    parent_list = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children',to_field='listid')
    name=models.CharField(max_length=200)
    url=models.URLField(max_length=400)

    def __str__(self) -> str:
        return self.name