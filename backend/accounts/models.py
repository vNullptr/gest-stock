from django.db import models
from shop.models import Shop
from django.contrib.auth.models import AbstractUser

class Staff(AbstractUser):
    class Role(models.IntegerChoices):
        EMPLOYE = 0, 'Employe'
        RESPONSABLE = 1, 'Responsable'
        GERANT = 2, 'Gerant'
    role = models.SmallIntegerField(choices=Role.choices, default=Role.EMPLOYE)
    shop = models.ForeignKey(
        Shop,
        on_delete=models.SET_NULL,
        related_name="staff",
        null=True
    )
    
