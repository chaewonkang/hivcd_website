from django.db import models


class Account(models.Model):
    snumber = models.CharField(max_length=10, default="", blank=False)
