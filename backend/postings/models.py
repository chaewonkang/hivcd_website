from django.db import models
from django.conf import settings
from django.core.cache import cache


class Timestamp(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Photo(Timestamp):
    caption = models.CharField(max_length=80)
    photo = models.ImageField(blank=True, upload_to="photos/%Y/%m/%d")
    post = models.ForeignKey(
        "Post", related_name="photos", on_delete=models.CASCADE, db_column="post_title"
    )

    def __str__(self):
        return self.caption


class File(Timestamp):
    name = models.CharField(max_length=80, default="", blank=False)
    files = models.FileField(blank=True, upload_to="files/%Y/%m/%d")
    post = models.ForeignKey(
        "Post", related_name="files", on_delete=models.CASCADE, db_column="post_title"
    )

    def __str__(self):
        return self.name


class Comment(Timestamp):
    post = models.ForeignKey("Post", on_delete=models.CASCADE, related_name="comments")
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="comments",
        db_column="author_username",
    )
    text = models.TextField()

    class Meta:
        ordering = ["-updated"]

    def save(self, *args, **kwargs):
        cache.delete("comments")
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        cache.delete("comments")
        super().delete(*args, **kwargs)

    def __str__(self):
        return self.text


class Post(Timestamp):
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, blank=False, default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    text = models.TextField()
    link = models.URLField(default="", blank=True)

    class PostCategory(models.IntegerChoices):
        NOTICE = 1
        EVENT = 2
        JOB = 3
        LOSTANDFOUND = 4
        GW = 5
        WFF = 6
        AETC = 7

    category = models.IntegerField(choices=PostCategory.choices)

    class Meta:
        ordering = ["-pk", "-updated", "-created", "title"]

    def save(self, *args, **kwargs):
        cache.delete("posts")
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        cache.delete("posts")
        super().delete(*args, **kwargs)

    def __str__(self):
        return self.title
