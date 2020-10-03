from rest_framework import viewsets
from .models import (
    Posting,
    Comment
)
from .serializers import (
    PostingSerializer,
    PostingDetailSerializer,
    CommentSerializer
)

class PostingViewSet(viewsets.ModelViewSet):
    queryset = Posting.objects.all()
    serializer_class = PostingSerializer

class PostingDetailViewSet(viewsets.ModelViewSet):
    queryset = Posting.objects.all()
    serializer_class = PostingDetailSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
