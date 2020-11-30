from django.urls import path, include


app_name = "api_v1"

urlpatterns = [
    path("auth/", include("apps.authentications.urls", namespace="auth")),
    path("postings/", include("apps.postings.urls", namespace="postings")),
]
