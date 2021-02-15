from django.db import models
from django.contrib.auth.models import AbstractUser


class Account(AbstractUser):
    suser_id = models.CharField(max_length=10, blank=False, default="")
    username = models.CharField(max_length=10, blank=False, default="", unique=True)