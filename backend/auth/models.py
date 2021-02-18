from django.db import models
from django.contrib.auth.models import AbstractUser


class Account(AbstractUser):
    suser_id = models.CharField(max_length=255, blank=False, default="", unique=True)
    is_sidi = models.BooleanField(default=False)
