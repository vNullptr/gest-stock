from rest_framework.response import Response
from .serializers import AuthSerializer, AuthLoginSerializer
from accounts.models import Staff
from django.contrib.auth.hashers import check_password
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from accounts.serializers import StaffReadSerializer

@api_view(["POST"])
@permission_classes([AllowAny])
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
@permission_classes([AllowAny])
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
    
    
@api_view(["GET"])
def check(request):
    serializer = StaffReadSerializer(request.user)
    return Response(serializer.data)

@api_view(["POST"])
def logout(request):
    request.user.auth_token.delete()
    return Response({
        "details":"Logged out!"
        },
        status=status.HTTP_200_OK
    )
