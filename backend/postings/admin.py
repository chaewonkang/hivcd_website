from django.contrib import admin
from .models import Post, Photo, Comment, File, Video


class PhotoInline(admin.TabularInline):
    model = Photo


class CommentInline(admin.TabularInline):
    model = Comment


class FileInline(admin.TabularInline):
    model = File


class VideoInline(admin.TabularInline):
    model = Video


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category')
    search_fields = ('title', 'author',)
    list_filter = (
        'category',
    )

    inlines = [
        PhotoInline,
        CommentInline,
        FileInline,
        VideoInline,
    ]

    fieldsets = (
        ("게시물정보", {
            "fields": (
                'author',
                'title',
                'text',
                'link',
                'sidi_only',
                'category',
                'created_at',
            ),
        }),
    )
    exclude = ('updated_at', )


