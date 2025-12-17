from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import AuthSerializer, AuthLoginSerializer
from accounts.models import Staff
from django.contrib.auth.hashers import check_password, make_password
from rest_framework import status
from rest_framework.authtoken.models import Token

@api_view(["POST"])
def signin(request):
    serializer = AuthLoginSerializer(data=request.data)
    if serializer.is_valid():
        user = Staff.objects.filter(username=serializer.validated_data["username"]).first()
        
        if not user or not check_password(serializer.validated_data["password"], user.password):
            return Response({
                "detail" : "Invalid credentials"
            }, status=status.HTTP_401_UNAUTHORIZED)
        
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            "token" : token.key,
            "detail": "authorized"
        },status=status.HTTP_200_OK)    
    
    return Response({
        "detail" : "Bad request"
    }, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(["POST"])
def signup(request):
    serializer = AuthSerializer(data=request.data)
    if serializer.is_valid():
        
        user = serializer.save()
        token, _ = Token.objects.get_or_create(user=user)
        
        return Response({
            "token" : token.key,
            "detail": "created"
        },status=status.HTTP_201_CREATED)    
    
    return Response({
        "detail" : "Bad request"
    }, status=status.HTTP_400_BAD_REQUEST)
