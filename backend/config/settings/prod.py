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

# PREPEND_WWW = False
# SECURE_SSL_REDIRECT = False

# -- TOPOF COMMON SETTING OF DEPLOY MODE
# SECURITY WARNING: don't run with debug turned on in production!
#DEBUG = False

# ALLOWED_HOSTS = ["web"]

# SECURE_SSL_REDIRECT = False
# SESSION_COOKIE_SECURE = True
# CSRF_COOKIE_SECURE = True
# SECURE_HSTS_SECONDS = True
# SECURE_HSTS_PRELOAD = True
# SECURE_HSTS_INCLUDE_SUBDOMAINS = True
# SECURE_REFERRER_POLICY = "same-origin"

# -- ENDOF COMMON SETTING OF DEPLOY MODE

# -- TOPOF COMMON SETTING OF TEMP-DEV MODE
# FOR TEMP-DEV MODE
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [
	"web",
	"sidi.hongik.ac.kr",
	"3.16.38.220",
	"127.0.0.1",
	"localhost",
	"*"
]

INSTALLED_APPS += ["corsheaders"]

MIDDLEWARE += [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
]

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
# -- ENDOF COMMON SETTING OF TEMP-DEV MODE
