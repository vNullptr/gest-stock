from django.db import models
from product.models import Product
from shop.models import Shop
from datetime import date


class Dealer(models.Model):
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=100)
    
class Order(models.Model):
    class Status(models.IntegerChoices):
        EN_ATTENTE = 0, 'En Attente'
        EN_COURS = 1, 'En Cours'
        ARRIVER = 2, 'Arriver'
        
    
    quantity = models.BigIntegerField()
    date_order = models.DateField(default=date.today)
    date_arrival = models.DateField()
    status = models.SmallIntegerField(choices=Status.choices, default=Status.EN_ATTENTE)
    shop = models.ForeignKey(
        Shop,
        on_delete=models.CASCADE,
        related_name="orders"
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="orders"
    )
    dealer = models.ForeignKey(
        Dealer,
        on_delete=models.CASCADE,
        related_name="orders"
    )

