import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

FRONTEND_URL = os.environ.get("FRONTEND_URL")
APP_SCHEME = os.environ.get("APP_SCHEME")

ALLOWED_HOSTS = ['localhost', '127.0.0.1', '127.0.0.1:3000', '127.0.0.1:8000']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get("DEBUG", True)

# if DEBUG == False:
ALLOWED_HOSTS = [
    "web",
    "sidi.hongiksidi.ac.kr",
    "3.16.38.220",
    "127.0.0.1",
    "localhost",
    "*"
    ]
# else:
#    ALLOWED_HOSTS = ["*"]

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("SECRET_KEY")

# Application definition
DJANGO_APPS = [
    "ckeditor",
    "ckeditor_uploader",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

PROJECT_APPS = [
    "auth",
    "postings",
    "api_v1",
    "alumnis",
    "reservations",
]

THIRDPARTY_APPS = [
    "rest_framework",
    "rest_framework.authtoken",
    "rest_framework_simplejwt",
    "rest_framework_simplejwt.token_blacklist",
    "django_extensions",
    "corsheaders",
    "drf_yasg",
    "django_seed",
    "storages",
    "cacheops",
    "imagekit",
]

INSTALLED_APPS = DJANGO_APPS + PROJECT_APPS + THIRDPARTY_APPS


MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "build")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

# WSGI_APPLICATION = 'wsgi.application'
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "en-us"

TIME_ZONE = "Asia/Seoul"

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Path of ckeditor upload
####################################
    ##  CKEDITOR CONFIGURATION ##
####################################

CKEDITOR_JQUERY_URL = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'

CKEDITOR_UPLOAD_PATH = 'uploads/'
CKEDITOR_IMAGE_BACKEND = "pillow"

CKEDITOR_IMAGE_BACKEND = "pillow"

CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': None,
    },
}

# Static files (CSS, JavaScript, Images)
STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "assets")
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "build", "static"),
]

# Media files
MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "uploads")

# Email Settings
EMAIL_USE_TLS = os.environ.get("EMAIL_USE_TLS")
EMAIL_HOST = os.environ.get("EMAIL_HOST")
EMAIL_PORT = os.environ.get("EMAIL_PORT")
EMAIL_HOST_USER = os.environ.get("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD")

# Cors Policy
CORS_ORIGIN_WHITELIST = [
    "https://sidi.hongik.ac.kr",
    "http://3.16.38.220",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
CORS_ALLOW_CREDENTIALS = True




from datetime import timedelta

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),
}

# USER Model
AUTH_USER_MODEL = "my_auth.Account"


SWAGGER_SETTINGS = {
    "SECURITY_DEFINITIONS": {
        "Bearer": {"type": "apiKey", "name": "Authorization", "in": "header"}
    }
}

CACHEOPS_LRU = True
CACHEOPS_DEGRADE_ON_FAILURE = True
CACHEOPS_DEFAULTS = {
    "timeout": 60 * 5,
    "cache_on_save": True,
    "local_get": False,
}
CACHEOPS_REDIS = {
    "host": "localhost",  # CACHEOPS_REDIS_HOST,
    "port": "6379",  # CACHEOPS_REDIS_PORT,
    "db": 1,
    "socket_timeout": 0.5,
}
CACHEOPS = {
    "my_auth.Account": {"ops": "get"},
    "postings.Post": {"ops": "get"},
    "postings.Comment": {"ops": "get"},
    "my_auth.Account": {"ops": "all"},
    "postings.Post": {"ops": "all"},
    "postings.Comment": {"ops": "all"},
}
SESSION_COOKIE_AGE = 1200
SESSION_SAVE_EVERY_REQUEST = True
