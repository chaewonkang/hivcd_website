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
    reply = serializers.SerializerMethodField()
    author = serializers.SlugRelatedField(read_only=True, slug_field="username")
    class Meta:
        model = Comment
        fields = (
            "post",
            "id",
            "author",
            "text",
            "parent",
            "created",
            "updated",
            "reply",
        )
        read_only_field = ['author']

    def get_reply(self, instance):
        serializer = self.__class__(instance.reply, many=True)
        serializer.bind('', self)
        return serializer.data


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
