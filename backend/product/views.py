from rest_framework.response import Response
from product.models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework.decorators import api_view
from rest_framework import viewsets

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


@api_view(['GET'])
def getCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)
