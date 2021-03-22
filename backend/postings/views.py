import json
from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import (ListModelMixin, CreateModelMixin,
                                   RetrieveModelMixin, DestroyModelMixin)
from rest_framework.response import Response
from rest_framework.viewsets import ViewSetMixin

from api_v1.utils import get_user_id
from auth.models import Account
from postings.models import Post, Comment
from postings.permissions import CookiePermission
from postings.serializers import PostSerializer, CommentSerializer


class PostViewSet(ViewSetMixin, ListModelMixin, GenericAPIView):
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
        return super().get_queryset().filter(category__range=[6, 8])


class AnnounceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        return super().get_queryset().filter(category__range=[9, 11])


class ArchiveViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        return super().get_queryset().filter(category__exact=12)


class CommentViewSet(viewsets.GenericViewSet, ListModelMixin,
                     CreateModelMixin, RetrieveModelMixin, DestroyModelMixin):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (CookiePermission,)

    def retrieve(self, request, *args, **kwargs):
        instance = Comment.objects.filter(post_id=kwargs['pk'])
        serializer = self.get_serializer(instance, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)

    def perform_create(self, serializer):
        user_id = get_user_id(self.request.COOKIES)
        user = get_object_or_404(Account, suser_id=user_id)
        serializer.save(author=user)
        return Response(status=status.HTTP_201_CREATED, data=serializer.data)

    def perform_destroy(self, instance, *args, **kwargs):
        pk = kwargs.pop('comment_id', None)
        if pk is not None:
            instance = get_object_or_404(Comment, pk=pk)
            instance.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND,
                        data=json.dumps({'detail': 'Can\'t find comment_id'}))