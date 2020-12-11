from rest_framework import serializers
from .models import Post, Comment, Photo, File


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = (
            "photo",
            "caption",
        )


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = (
            "files",
            "name",
        )


class PostSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field="username")
    photos = PhotoSerializer(many=True, required=False)
    comments = CommentSerializer(many=True, required=False)
    files = FileSerializer(many=True, required=False)

    class Meta:
        model = Post
        fields = [
            "pk",
            "author",
            "title",
            "text",
            "category",
            "photos",
            "files",
            "comments",
            "created",
            "updated",
            "link",
        ]
