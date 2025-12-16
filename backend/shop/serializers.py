from rest_framework import serializers
from shop.models import Shop, Stock

class ShopSerializer(serializers.Serializer):
    class Meta:
        model = Shop
        fields = '__all__'

class StockSerializer(serializers.Serializer):
    class Meta:
        model = Stock
        fields = '__all__'