from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, UserManager, PermissionsMixin


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username, email=None, password=None, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        if not username:
            raise ValueError('The given username must be set')
        username = self.model.normalize_username(username)
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, password, **extra_fields)

    def create_superuser(self, suser_id, password=None, **extra_fields):
        user = self.model(
            suser_id=suser_id,
        )
        user.set_password(password)
        user.is_staff = True
        user.is_superuser = True
        user.is_sidi = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser, PermissionsMixin):
    suser_id = models.CharField(max_length=255, blank=False, default="", unique=True)
    is_sidi = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = "suser_id"

    objects = UserManager()
