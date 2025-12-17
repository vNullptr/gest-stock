from rest_framework import serializers
from accounts.models import Staff
from django.contrib.auth.hashers import make_password

class AuthLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

class AuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = ["username", "password"]
        
    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        
        return super().create(validated_data)
