from django.db import models
from django.conf import settings


class Timestamp(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Photo(Timestamp):
    caption = models.CharField(max_length=80)
    photo = models.ImageField(blank=True, upload_to="photo/%Y/%m/%d")
    post = models.ForeignKey("Post", related_name="photos", on_delete=models.CASCADE)

    def __str__(self):
        return self.caption


class File(Timestamp):
    name = models.CharField(max_length=80, default="", blank=False)
    files = models.FileField(blank=True, upload_to="files/%Y/%m/%d")
    post = models.ForeignKey("Post", related_name="files", on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Comment(Timestamp):
    post = models.ForeignKey("Post", on_delete=models.CASCADE, related_name="comments")
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="comments"
    )
    text = models.TextField()

    class Meta:
        ordering = ["-updated"]

    def __str__(self):
        return self.text


class Post(Timestamp):
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, blank=False, default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    text = models.TextField()

    class PostCategory(models.IntegerChoices):
        NOTICE = 1
        LOSTANDFOUND = 2
        JOB = 3

    category = models.IntegerField(choices=PostCategory.choices)

    class Meta:
        ordering = ["-updated", "-created", "title"]

    def __str__(self):
        return self.title
