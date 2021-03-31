from django.urls import path, include
from . import views

app_name = "postings"

urlpatterns = [
    path("", views.PostListCreateAPIView.as_view()),
    path("<int:pk>/", views.PostRetrieveAPIView.as_view()),
    path("<int:pk>/comments/", views.CommentListCreateAPIView.as_view()),
]
