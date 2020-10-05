from django.db import models
from django.contrib.auth.models import User

class Posting(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=False)
    text = models.TextField()
    photo = models.ImageField(blank=True, upload_to='photo/%Y/%m/%d')
    view_count = models.PositiveIntegerField(default=0)
    files = models.FileField(blank=True, upload_to='files/%Y/%m/%d')
    created_datetime = models.DateTimeField(auto_now_add=True)
    updated_datetime = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_datetime']

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Posting, related_name='comments',on_delete=models.CASCADE)
    author = models.CharField(max_length=200)
    text = models.TextField()
    created_datetime = models.DateTimeField(auto_now_add=True)
    updated_datetime = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_datetime']

    def __str__(self):
        return self.text