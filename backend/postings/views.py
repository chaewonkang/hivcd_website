from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import CookiePermission
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer
from django.core.cache import cache
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie


class PostListCreateAPIView(generics.ListAPIView):
    queryset = Post.objects.cache().all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

class PostRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    permission_classes = (CookiePermission,)

class CommentListCreateAPIView(generics.ListCreateAPIView):

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
#    permission_classes = (CookiePermission,)

    def get_queryset(self):
        qs = Comment.objects.filter(post_id=self.kwargs["pk"])
        return qs

    def perform_create(self, serializer):
        return serializer.save(author=self.request.user)
