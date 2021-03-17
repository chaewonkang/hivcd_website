from django.shortcuts import render, get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response

from api_v1.utils import get_user_id
from auth.models import Account
from postings.models import Post, Comment
from postings.permissions import CookiePermission
from postings.serializers import PostSerializer, CommentSerializer


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
        instance = Comment.objects.filter(post_id=kwargs['pk'])
        serializer = self.get_serializer(instance, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        user_id = get_user_id(self.request.COOKIES)
        user = get_object_or_404(Account, suser_id=user_id)
        return serializer.save(author=user)
