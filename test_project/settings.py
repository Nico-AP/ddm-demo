import json
import os
import sys


PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DDM_DIR = os.path.join(PROJECT_DIR, 'ddm')
VUE_FRONTEND_DIR = os.path.join(PROJECT_DIR, 'frontend')

sys.path.append(PROJECT_DIR)
sys.path.append(DDM_DIR)

test_config = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'test_config.json')))

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.sites',
    'django.contrib.staticfiles',
    'ddm',
    'ckeditor',
    'ckeditor_uploader',
    'webpack_loader',
    'rest_framework',
    'rest_framework.authtoken',
    'debug_toolbar',  # Added for debugging purposes
]

MIDDLEWARE = [
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.contrib.sites.middleware.CurrentSiteMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',  # Added for debugging purposes
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.static',
                'django.template.context_processors.tz',
                'django.template.context_processors.i18n',
                'ddm.context_processors.add_ddm_version'
            ],
        },
    },
]

DB_CONFIG = {
    'default': {
        'ENGINE': test_config['DB_ENGINE'],
        'NAME': test_config['DB_NAME'],
    }
}

ALLOWED_HOSTS = ['localhost', '127.0.0.1']
ROOT_URLCONF = 'urls'
DATABASES = DB_CONFIG
DEBUG = True
SECRET_KEY = test_config['SECRET_KEY']
SITE_ID = 1
USE_TZ = True
TIME_ZONE = 'Europe/Zurich'
LANGUAGE_CODE = 'en'
USE_I18N = True
LANGUAGES = [
    ('en', 'English'),
    ('de', 'Deutsch')
]

STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(DDM_DIR, 'static'),
)

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(PROJECT_DIR, 'media')

WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': True,
        'BUNDLE_DIR_NAME': 'ddm/vue/',
        'STATS_FILE': os.path.join(DDM_DIR, 'static', 'ddm', 'vue', 'webpack-stats.json'),
        'POLL_INTERVAL': 0.1,
        'TIMEOUT': None,
        'IGNORE': [r'.+\.hot-update.js', r'.+\.map']
    }
}

DDM_SETTINGS = {
    'EMAIL_PERMISSION_CHECK': r'.*(\.|@)uzh\.ch$',
}

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator', },
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator', },
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator', },
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator', },
]

LOGIN_REDIRECT_URL = '/auth/register/'
LOGOUT_REDIRECT_URL = '/login/'

CKEDITOR_RESTRICT_BY_USER = True
CKEDITOR_UPLOAD_PATH = 'uploads/'


INTERNAL_IPS = ["127.0.0.1", ]  # Added for debugging purposes
