from django.db import models


class Alumni(models.Model):
    name = models.CharField(max_length=255, blank=False, default="")
    phone = models.CharField(max_length=12)
    website = models.URLField()
    year = models.IntegerField()