from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(
        'Category',
        on_delete=models.SET_NULL,
        related_name='products',
        null=True
    )
    price = models.FloatField()
    quantity = models.BigIntegerField()
    
    
class Category(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
