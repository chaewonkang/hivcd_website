from django.urls import path, include
from rest_framework.routers import DefaultRouter
from posting.views import PostViewSet

router = DefaultRouter()
router.register(r'post', PostViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('<int:pk>/', include(router.urls), name="posting_detail"),
]