from .models import Staff
from .serializers import StaffReadSerializer, StaffWriteSerializer
from rest_framework import viewsets

class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()

    def get_serializer_class(self):
            if self.action in ["create", "update", "partial_update"]:
                return StaffWriteSerializer
            return StaffReadSerializer
