from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from posting.views import PostingViewSet, CommentsViewSet, posting_detail, posting_comments
from dj_rest_auth.registration.views import (SocialAccountListView, SocialAccountDisconnectView)
from .views import FacebookConnect, FacebookLogin, TwitterConnect, TwitterLogin, GithubConnect, GithubLogin
router = routers.DefaultRouter()
router.register(r'postings', PostingViewSet)
router.register(r'comments', CommentsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('postings/<int:pk>/comments/', posting_comments),
    path('postings/<int:pk>/', posting_detail),
]

urlpatterns += [
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
]

urlpatterns += [
    path(
        'socialaccounts/',
        SocialAccountListView.as_view(),
        name='social_account_list'
    ),
    path(
        'socialaccounts/<int:pk>/disconnect/',
        SocialAccountDisconnectView.as_view(),
        name='social_account_disconnect'
    ),
    path('dj-rest-auth/github/', GithubLogin.as_view(), name='github_login'),
    path('dj-rest-auth/twitter/', TwitterLogin.as_view(), name='twitter_login'),
    path('dj-rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),

]