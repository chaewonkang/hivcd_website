from django.urls import path, include
from . import views

app_name = "postings"

urlpatterns = [
    path("test/list/", views.post_list),
    path("test/detail/", views.post_detail),
    path("test/comments/", views.post_comment),
    path("", views.PostListAPIView.as_view()),
    path("<int:pk>/", views.PostRetrieveAPIView.as_view()),
    path("<int:pk>/comments/", views.CommentListCreateAPIView.as_view()),
]
