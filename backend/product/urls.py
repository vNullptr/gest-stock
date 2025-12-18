from django.urls import path
from . import views

urlpatterns = [
     path('product/', views.getProducts),
     path('product/<int:product_id>/', views.getProduct)
]
