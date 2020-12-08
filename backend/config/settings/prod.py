from .base import *

DEBUG = False

ALLOWED_HOSTS = ["localhost", "127.0.0.1", "http://hongiksidi.azurewebsites.net"]

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

# Configure Postgres database; the full username is username@servername,
# which we construct using the DBHOST value.

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.environ["DBNAME"],
        "HOST": hostname + ".postgres.database.azure.com",
        "USER": os.environ["DBUSER"] + "@" + hostname,
        "PASSWORD": os.environ["DBPASS"],
    }
}