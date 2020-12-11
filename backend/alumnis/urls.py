from django.urls import path
from .views import AlumniListCreateAPIView

app_name = "alumnis"

urlpatterns = [
    path("", AlumniListCreateAPIView.as_view(), name="alumnis"),
]
