from django.db import models
from django.conf import settings
from django.core.cache import cache
from django.utils import timezone


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


class Post(models.Model):
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, blank=False, default="")
    created_at = models.DateTimeField(editable=True)
    updated_at = models.DateTimeField(auto_now=True)
    text = models.TextField()
    link = models.URLField(default="", blank=True)
    sidi_only = models.BooleanField(default=False)

    class PostCategory(models.IntegerChoices):
        News = 1
        Notice = 2
        Promotionandevent = 3
        Job = 4
        LostAndFound = 5
        Gw = 6
        Wff = 7
        Aetc = 8
        Life = 9
        Informations = 10
        Statute = 11
        Archive = 12

    category = models.IntegerField(choices=PostCategory.choices)

    class Meta:
        ordering = ["-created_at", "title"]

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        super().delete(*args, **kwargs)

    def __str__(self):
        return self.title
