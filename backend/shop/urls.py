from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'shop', views.ShopViewSet, basename="shops")
urlpatterns = router.urls
