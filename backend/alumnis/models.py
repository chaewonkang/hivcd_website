from django.db import models


class Alumni(models.Model):
    name = models.CharField(max_length=255, blank=False, default="")
    phone = models.CharField(max_length=12)
    website = models.URLField(default="", blank=False)
    year = models.CharField(max_length=2)

    def __str__(self):
        return self.name
