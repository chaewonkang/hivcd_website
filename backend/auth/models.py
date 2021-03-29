from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class Account(AbstractBaseUser):
    suser_id = models.CharField(max_length=255, blank=False, default="", unique=True)
    is_sidi = models.BooleanField(default=False)

    USERNAME_FIELD = "suser_id"

    objects = BaseUserManager()
