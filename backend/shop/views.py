from rest_framework.response import Response
from .models import Shop
from .serializers import ShopSerializer
from rest_framework import viewsets

class ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

