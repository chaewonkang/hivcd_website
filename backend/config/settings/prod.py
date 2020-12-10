from .base import *

DEBUG = False

ALLOWED_HOSTS = ["*"]

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

# DBHOST is only the server name, not the full URL
hostname = os.environ["DBHOST"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.environ["DBNAME"],
        "HOST": hostname + ".postgres.database.azure.com",
        "USER": os.environ["DBUSER"] + "@" + hostname,
        "PASSWORD": os.environ["DBPASS"],
    }
}

SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_SSL_REDIRECT = True