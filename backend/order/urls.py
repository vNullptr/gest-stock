from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'suppliers', views.SupplierViewSet, basename="suppliers")
router.register(r'orders', views.OrderViewSet, basename="orders")
urlpatterns = router.urls
