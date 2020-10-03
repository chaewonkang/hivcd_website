from django.contrib import admin
from .models import Posting, Comment

admin.site.register(Posting)
admin.site.register(Comment)