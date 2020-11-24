from django.urls import path, include
from rest_framework import routers
from . import views


app_name = "postings"

router = routers.DefaultRouter()
router.register(r"", views.PostViewset)
router.register(r"comments", views.CommentsViewset)

urlpatterns = [
    path("", include(router.urls)),
]
