from django.db import models
from shop.models import Shop

class Staff(models.Model):
    class Role(models.IntegerChoices):
        EMPLOYE = 0, 'Employe'
        RESPONSABLE = 1, 'Responsable'
        GERANT = 2, 'Gerant'
        
    password = models.CharField(max_length=100)
    contact = models.CharField(max_length=10)
    role = models.SmallIntegerField(choices=Role.choices, default=Role.EMPLOYE)
    shop = models.ForeignKey(
        Shop,
        on_delete=models.SET_NULL,
        related_name="staff",
        null=True
    )
    
