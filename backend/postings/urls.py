from django.urls import include, path
from rest_framework.routers import SimpleRouter
from rest_framework_nested.routers import NestedSimpleRouter
from . import views


app_name = "postings"

router = SimpleRouter()
router.register(r'', views.PostViewSet)
router.register(r'board', views.BoardViewSet)
router.register(r'exhibition', views.ExhibitionViewSet)
router.register(r'info', views.InfoViewSet)
router.register(r'archive', views.ArchiveViewSet)

comment_router = NestedSimpleRouter(router, r'', lookup='postings')
comment_router.register(r'comments', views.CommentViewSet, basename='posting-comments')

video_router = NestedSimpleRouter(router, r'', lookup='postings')
video_router.register(r'video', views.VideoViewSet, basename='posting-videos')
urlpatterns = router.urls + comment_router.urls + video_router.urls
