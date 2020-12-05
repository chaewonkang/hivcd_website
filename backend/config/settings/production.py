from .base import *

DEBUG = False

ALLOWED_HOSTS = ["localhost", "127.0.0.1"]

# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.postgresql_psycopg2",
#         "NAME": os.environ.get("POSTGRES_NAME"),
#         "USER": os.environ.get("POSTGRES_USER"),
#         "PASSWORD": os.environ.get("POSTGRES_PASSWORD"),
#         "HOST": os.environ.get("POSTGRES_HOST"),
#         "PORT": os.environ.get("POSTGRES_PORT"),
#     }
# }

CORS_ORIGIN_WHITELIST = ["https://localhost:3000"]
