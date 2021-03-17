import os
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.db.models import Q
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, permission_classes
from auth.decrypt import decrypt
from auth.models import Account
from api_v1.utils import get_user_id
from .permissions import CookiePermission
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer


class PostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class BoardViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        return super().get_queryset().filter(category__lte=5)


class ExhibitionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        return super().get_queryset().filter(category__range=[6,8])


class AnnounceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        return super().get_queryset().filter(category__range=[9,11])


class ArchiveViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        return super().get_queryset().filter(category__exact=12)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (CookiePermission,)

    def retrieve(self, request, *args, **kwargs):
        return Comment.objects.filter(post_id=self.kwargs["pk"])

    def perform_create(self, serializer):
        user_id = get_user_id(self.request.COOKIES)
        user = get_object_or_404(Account, suser_id=user_id)
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
