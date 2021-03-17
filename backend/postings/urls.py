from django.urls import include, path
from rest_framework.routers import SimpleRouter
from . import views

app_name = "postings"

router = SimpleRouter()
router.register(r'', views.PostViewSet)

urlpatterns = router.urls
