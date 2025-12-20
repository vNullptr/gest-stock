from rest_framework import serializers
from accounts.models import Staff

class StaffReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = ["id", "username", "role", "last_name", "first_name", "email", "shop"]

class StaffWriteSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    
    class Meta:
        model = Staff
        fields = "__all__"
        
    def update(self, instance, validated_data):
        password = validated_data.pop("password", None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
            
        if password:
            instance.set_password(password)
            
        instance.save()
        return instance