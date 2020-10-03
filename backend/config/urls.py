# mysite/urls.py
from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('api-auth/', include("rest_framework.urls")),
    path('api/dj-rest-auth/', include("dj_rest_auth.urls")),
    path('api/dj-rest-auth/registration/', include("dj_rest_auth.registration.urls"))
]

urlpatterns += [
    path('admin/', admin.site.urls),
    path('accounts/', include('apps.accounts.urls')),
    path('board/', include('apps.board.urls')),
]
