from rest_framework.response import Response
from product.models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework.decorators import api_view, action
from rest_framework import viewsets
from django.db.models import Sum, F

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    @action(detail=False, methods=['get'], url_path='count')
    def count(self, request):
        return Response({
            "count": self.get_queryset().count()
        })


@api_view(['GET'])
def getCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)
