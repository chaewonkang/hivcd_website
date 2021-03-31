from .base import *

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "PORT": "5432",
        "NAME": os.environ.get("DBNAME"),
        "HOST": os.environ.get("DBHOST"),
        "USER": os.environ.get("DBUSER"),
        "PASSWORD": os.environ.get("DBPASS"),
    }
}
