from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView,
)

app_name = "auth"

urlpatterns = [
    path("", views.UserListAPIView.as_view(), name="user-list"),
    path("<int:pk>/", views.UserDetailAPIView.as_view(), name="user-detail"),
    path("registration/", views.RegistrationView.as_view(), name="user-register"),
    path(
        "registration/email-verify/", views.VerifyEmail.as_view(), name="email-verify"
    ),
    path("login/", views.LoginAPIView.as_view(), name="user-login"),
    path("logout/", views.LogoutAPIView.as_view(), name="user-logout"),
    path(
        "request-reset-email/",
        views.RequestPasswordResetEmail.as_view(),
        name="request-reset-email",
    ),
    path(
        "password-reset/<uidb64>/<token>/",
        views.PasswordTokenCheckAPI.as_view(),
        name="password-reset-confirm",
    ),
    path(
        "password-reset-complete/",
        views.SetNewPasswordAPIView.as_view(),
        name="password-reset-complete",
    ),
]

urlpatterns += [
    path("token-refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("token-verify/", TokenVerifyView.as_view(), name="token_verify"),
]
