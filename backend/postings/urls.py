from django.urls import include, path
from rest_framework.routers import SimpleRouter
from . import views

app_name = "postings"

router = SimpleRouter()
router.register(r'board', views.BoardViewSet)
router.register(r'exhibition', views.ExhibitionViewSet)
router.register(r'announce', views.AnnounceViewSet)
router.register(r'archive', views.ArchiveViewSet)
router.register(r'comment', views.CommentViewSet)

urlpatterns = router.urls

