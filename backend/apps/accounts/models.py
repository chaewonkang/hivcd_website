from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        user = self.create_user(
            email,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    is_student = models.BooleanField(default=False)
    is_professor = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app 'app_label'?"
        # Simplest possible answer: Yes, always
        return True


class UserProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    preferred_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=50)
    image = models.ImageField(upload_to='profile-images')
    fb_profile_url = models.CharField(max_length=100)
    twitter_profile_url = models.CharField(max_length=100)
    linkedin_profile_url = models.CharField(max_length=100)
    website_url = models.CharField(max_length=100)
    LEVELS = (
        (1, 'Level One'),
        (2, 'Level Two'),
        (3, 'Level Three'),
        (4, 'Level Four'),
    )
    current_level = models.IntegerField(choices=LEVELS)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
