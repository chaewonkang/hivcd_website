from django.conf import settings
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from django.http import JsonResponse, HttpResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer


class PostListAPIView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    permission_classes = (IsAuthenticatedOrReadOnly,)


class PostRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    permission_classes = (IsAuthenticatedOrReadOnly,)


class CommentListCreateAPIView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        qs = Comment.objects.filter(post_id=self.kwargs['pk'])
        return qs

    def perform_create(self, serializer):
        return serializer.save(author=self.request.user)

