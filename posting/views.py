from rest_framework import viewsets
from .models import Posting, Comment
from .serializers import PostingSerializer, CommentSerializer, PostingDetailSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_object_or_404

class PostingViewSet(viewsets.ModelViewSet):
    queryset = Posting.objects.all()
    serializer_class = PostingSerializer

class CommentsViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

@csrf_exempt
def posting_detail(request, pk):
    try:
        posting = Posting.objects.get(pk=pk)
    except Posting.DoesNotExist:
        return HttpResponse(status=404)
    if (request.method == 'GET'):
        serializer = PostingDetailSerializer(posting, context={'request' : request})
        return JsonResponse(serializer.data)

@csrf_exempt
def posting_comments(request, pk):
    try:
        comments = Posting.objects.get(pk=pk).comment_set.all()
    except Posting.DoesNotExist:
        return HttpResponse(status=404)
    except Comment.DoesNotExist:
        return HttpResponse(status=404)
    if len(comments) == 0:
        return HttpResponse(status=404)
    if (request.method == 'GET'):
        serializer = CommentSerializer(comments, many=True)
        return JsonResponse(serializer.data, safe=False)