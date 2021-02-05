from django.conf import settings
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from django.http import JsonResponse, HttpResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer
from django.core.cache import cache
import json
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie


class PostListAPIView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    permission_classes = (IsAuthenticatedOrReadOnly,)

    @method_decorator(vary_on_cookie)
    @method_decorator(cache_page(60 * 60))
    def dispatch(self, *args, **kwargs):
        return super(PostListAPIView, self).dispatch(*args, **kwargs)


class PostRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    permission_classes = (IsAuthenticatedOrReadOnly,)

    @method_decorator(vary_on_cookie)
    @method_decorator(cache_page(60 * 60))
    def dispatch(self, *args, **kwargs):
        return super(PostRetrieveAPIView, self).dispatch(*args, **kwargs)


class CommentListCreateAPIView(generics.ListCreateAPIView):

    try:
        queryset = cache.get("comments")
    except:
        queryset = Comment.objects.all()
        cache.set("comments", queryset)
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    @method_decorator(vary_on_cookie)
    @method_decorator(cache_page(60 * 60))
    def dispatch(self, *args, **kwargs):
        return super(ListCreateAPIView, self).dispatch(*args, **kwargs)

    def get_queryset(self):
        qs = Comment.objects.filter(post_id=self.kwargs["pk"])
        return qs

    def perform_create(self, serializer):
        return serializer.save(author=self.request.user)
