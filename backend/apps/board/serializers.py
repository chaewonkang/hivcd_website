from rest_framework import serializers
from .models import (Posting, Comment)

class PostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posting
        fields = (
            'created_datetime',
            'updated_datetime',
            'url',
            'author',
            'title',
            'view_count'
        )

class PostingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posting
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('author', 'text', 'created_datetime', 'updated_datetime', 'url')