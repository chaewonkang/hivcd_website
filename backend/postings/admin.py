from django.contrib import admin
from .models import Post, Photo, Comment, File


admin.site.register(Post)
admin.site.register(Photo)
admin.site.register(Comment)
admin.site.register(File)
