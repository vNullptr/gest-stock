from rest_framework import serializers
from .models import Shop, Stock
from accounts.models import Staff
from product.serializers import ProductSerializer
from django.db.models import Sum

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = '__all__'

class ShopStockSerialzer(serializers.ModelSerializer):
    product = ProductSerializer()
    total_quantity = serializers.SerializerMethodField()
    
    class Meta:
        model = Stock
        fields = ["id","product","quantity", "total_quantity"]
        
    def get_total_quantity(self, obj):
        return obj.product.stocks.aggregate(total=Sum('quantity'))['total']
    
    
class ShopStaffSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = ["id", "first_name", "last_name", "role"]
    
class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = '__all__'