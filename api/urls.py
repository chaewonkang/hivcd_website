from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from posting.views import PostingViewSet, CommentsViewSet, posting_detail, posting_comments

router = routers.DefaultRouter()
router.register(r'postings', PostingViewSet)
router.register(r'comments', CommentsViewSet)

urlpatterns = [
    path('postings/<int:pk>/comments/', posting_comments),
    path('postings/<int:pk>/', posting_detail),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
