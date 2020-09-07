from django.conf.urls import url, include
from .models import Posting, Comment
from rest_framework import serializers
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse

class PostingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Posting
        fields = ('created_datetime', 'url', 'author', 'title')

class PostingDetailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Posting
        fields = '__all__'

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'