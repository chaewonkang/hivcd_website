from django.urls import include, path
from rest_framework.routers import SimpleRouter
from rest_framework_nested.routers import NestedSimpleRouter
from . import views


app_name = "postings"

router = SimpleRouter()
router.register(r'', views.PostViewSet)
router.register(r'board', views.BoardViewSet)
router.register(r'exhibition', views.ExhibitionViewSet)
router.register(r'announce', views.AnnounceViewSet)
router.register(r'archive', views.ArchiveViewSet)

comment_router = NestedSimpleRouter(router, r'', base_name='posting-comments')

urlpatterns = router.urls + comment_router.urls
