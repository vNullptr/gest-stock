from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from product.models import Product
from .serializers import ProductSerializer

@api_view(['GET'])
def getProduct(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
