from django.conf import settings
from django.db import models
from django.utils import timezone

class Posting(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=False)
    text = models.TextField()
    created_datetime = models.DateTimeField(auto_now_add=True)
    updated_datetime = models.DateTimeField(auto_now=True)
    photo = models.ImageField(blank=True, upload_to='photo/%Y/%m/%d')
    view_count = models.PositiveIntegerField(default=0)
    files = models.FileField(blank=True, upload_to='files/%Y/%m/%d')
    class Meta:
        ordering = ['-created_datetime']
    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Posting, on_delete=models.CASCADE)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.CharField(max_length=200, blank=False)
    created_datetime = models.DateTimeField(auto_now_add=True)
    updated_datetime = models.DateTimeField(auto_now=True)
    def __str__(self):
        ordering = ['-created_datetime']
        return self.text

