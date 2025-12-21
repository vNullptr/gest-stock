from .models import Dealer, Order
from .serializers import DealerSerializer, OrderCreateSerializer, OrderReadSerializer 
from rest_framework import viewsets
from rest_framework.decorators import action


class SupplierViewSet(viewsets.ModelViewSet):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer
    
class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    
    def get_serializer_class(self):
        if self.action == "create":
            return OrderCreateSerializer
        return OrderReadSerializer
        
        
        
        
    
    