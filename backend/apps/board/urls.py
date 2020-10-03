from django.urls import path, include
from django.contrib import admin
from .views import (
    PostingViewSet,
    PostingDetailViewSet,
    CommentViewSet
)
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'list', PostingViewSet)
router.register(r'comments', CommentViewSet)

urlpatterns = router.urls
