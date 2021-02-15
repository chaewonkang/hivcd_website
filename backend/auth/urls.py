from django.urls import path
from .views import login_view, logout_view, user_list

app_name = "auth"

urlpatterns = [
    path("login", login_view),
    path("logout", logout_view),
    path("", user_list),
]
