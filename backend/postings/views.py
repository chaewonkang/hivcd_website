import os
from django.http import HttpResponse
from django.core.cache import cache
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from auth.decrypt import decrypt
from auth.models import Account
from .permissions import CookiePermission
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer


class PostListCreateAPIView(generics.ListAPIView):
    queryset = Post.objects.all().cache()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class PostRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Post.objects.all().cache()
    serializer_class = PostSerializer
    permission_classes = (CookiePermission,)


class CommentListCreateAPIView(generics.ListCreateAPIView):
    queryset = Comment.objects.all().cache()
    serializer_class = CommentSerializer
    permission_classes = (CookiePermission,)

    def get_queryset(self):
        qs = Comment.objects.filter(post_id=self.kwargs["pk"])
        return qs

    def perform_create(self, serializer):
        user_id = decrypt(s=self.request.COOKIES["SUSER_ID"], key=os.getenv("AUTH_KEY"))
        user_id = user_id[:7]
        try:
            user = Account.objects.get(suser_id=user_id)
        except Exception as e:
            return HttpResponse(e)
        return serializer.save(author=user)
