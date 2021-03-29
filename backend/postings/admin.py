from django.contrib import admin
from .models import Post, Photo, Comment, File


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category')
    list_filter = (
        'category',
    )

    fieldsets = (
        ("게시물정보", {
            "fields": (
                'author',
                'title',
                'text',
                'link',
                'sidi_only'
                'category',
                'created_at',
                'updated_at',
                'photos',
                'comments',
                'files',
            ),
        }),
    )



admin.site.register(Photo)
admin.site.register(Comment)
admin.site.register(File)
