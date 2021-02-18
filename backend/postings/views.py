import os
from django.core.cache import cache
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie
from rest_framework import generics
from auth.decrypt import decrypt
from auth.models import Account
from .permissions import CookiePermission
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer


class PostListCreateAPIView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    permission_classes = (CookiePermission,)

    @method_decorator(vary_on_cookie)
    @method_decorator(cache_page(60 * 60))
    def dispatch(self, *args, **kwargs):
        return super(PostListCreateAPIView, self).dispatch(*args, **kwargs)


class PostRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    permission_classes = (CookiePermission,)

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
    permission_classes = (CookiePermission,)

    @method_decorator(vary_on_cookie)
    @method_decorator(cache_page(60 * 60))
    def dispatch(self, *args, **kwargs):
        return super(CommentListCreateAPIView, self).dispatch(*args, **kwargs)

    def get_queryset(self):
        qs = Comment.objects.filter(post_id=self.kwargs["pk"])
        return qs

    def perform_create(self, serializer):
        user_id = decrypt(s=self.request.COOKIE["SUSER_ID"], key=os.getenv("AUTH_KEY"))
        user = Account.objects.get(username=user_id)
        return serializer.save(author=user)
