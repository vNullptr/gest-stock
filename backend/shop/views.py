from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Shop, Stock
from accounts.models import Staff
from .serializers import ShopSerializer, StockSerializer, ShopStockSerialzer, ShopStaffSerialzer
from rest_framework import viewsets

class ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer
    
    @action(detail=True, methods=['get'], url_path='products')
    def products(self, request, pk=None):
        shop = self.get_object()
        stocks = Stock.objects.filter(shop=shop).select_related('product')
        serializer = ShopStockSerialzer(stocks, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path='staff')
    def staff(self, request, pk=None):
        shop = self.get_object()
        staff = Staff.objects.filter(shop=shop)
        serializer = ShopStaffSerialzer(staff, many=True)
        return Response(serializer.data)

class StockViewSet(viewsets.ModelViewSet):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
