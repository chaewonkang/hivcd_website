from rest_framework import serializers
from .models import Post, Comment, Photo, File, Video


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = (
            "photo",
            "caption",
        )


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field="suser_id")

    class Meta:
        model = Comment
        fields = (
            "post",
            "id",
            "author",
            "text",
            "created",
            "updated",
        )
        read_only_field = ["author"]


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = (
            "files",
            "name",
        )


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = (
            "video_link",
            "name",
        )


class PostSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field="suser_id")
    photos = PhotoSerializer(many=True, required=False)
    comments = CommentSerializer(many=True, required=False)
    files = FileSerializer(many=True, required=False)
    videos = VideoSerializer(many=True, required=False)

    class Meta:
        model = Post
        fields = [
            "pk",
            "author",
            "title",
            "text",
            "more_text",
            "category",
            "photos",
            "files",
            "videos",
            "comments",
            "created_at",
            "updated_at",
            "link",
            "sidi_only",
        ]
