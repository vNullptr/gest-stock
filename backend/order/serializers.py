from rest_framework import serializers
from .models import Order, Dealer
from product.serializers import ProductSerializer
from shop.serializers import ShopSerializer
import random
from datetime import date, timedelta

def random_arrival_date():
    return date.today() + timedelta(days=random.randint(3, 20))

class OrderCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ["product", "shop", "dealer", "quantity"]
        
    def create(self, validated_data):
        validated_data['date_arrival'] = random_arrival_date()
        return super().create(validated_data)
                
class DealerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dealer
        fields = '__all__'

class OrderReadSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    shop = ShopSerializer(read_only=True)
    dealer = DealerSerializer(read_only=True)
    
    class Meta:
        model = Order
        fields = ["id", "dealer", "product", "shop","quantity", "status", "date_arrival", "date_order"]