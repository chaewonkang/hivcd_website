import os
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.db.models import Q
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, permission_classes, action
from auth.decrypt import decrypt
from auth.models import Account
from api_v1.utils import get_user_id
from .permissions import CookiePermission
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer


class PostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


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
