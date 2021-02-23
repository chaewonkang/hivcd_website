import os
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, permission_classes
from auth.decrypt import decrypt
from auth.models import Account
from api_v1.utils import get_user_id
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
        qs = Comment.objects.filter(post_id=self.kwargs["pk"]).cache()
        return qs

    def perform_create(self, serializer):
        user_id = get_user_id(self.request.COOKIES)
        try:
            user = Account.objects.get(suser_id=user_id)
        except Exception as e:
            return HttpResponse(e)
        return serializer.save(author=user)


@api_view(["POST"])
@permission_classes([CookiePermission])
def delete_comment(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    user_id = get_user_id(request.COOKIES)
    if comment.author.suser_id == user_id:
        comment.delete()
        return HttpResponse(status=200)
    else:
        return HttpResponse(status=404)
