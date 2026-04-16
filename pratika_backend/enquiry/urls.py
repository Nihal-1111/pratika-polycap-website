from django.urls import path
from .views import send_inquiry

urlpatterns = [
    path('inquiry/', send_inquiry),
]