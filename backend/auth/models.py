from django.db import models


class Account(models.Model):
    userid = models.CharField(max_length=10, default="", blank=False)
