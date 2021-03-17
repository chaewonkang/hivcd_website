from django.contrib import admin
from .models import Post, Photo, Comment, File


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category')
    list_filter = (
        'category',
    )


admin.site.register(Photo)
admin.site.register(Comment)
admin.site.register(File)
