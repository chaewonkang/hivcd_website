from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from posting.views import PostingViewSet, CommentsViewSet, posting_detail, posting_comments
from .views import FacebookLogin, FacebookConnect, TwitterConnect, TwitterLogin
from rest_auth.registration.views import (SocialAccountListView, SocialAccountDisconnectView)

router = routers.DefaultRouter()
router.register(r'postings', PostingViewSet)
router.register(r'comments', CommentsViewSet)

urlpatterns = [
    path('postings/<int:pk>/comments/', posting_comments),
    path('postings/<int:pk>/', posting_detail),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('rest-auth/facebook/connect/', FacebookConnect.as_view(), name='fb_connect'),
    path('rest-auth/twitter/connect/', TwitterConnect.as_view(), name='twitter_connect'),
    # path('rest-auth/github/connect/$', GithubConnect.as_view(), name='github_connect'),
    path('socialaccounts/', SocialAccountListView.as_view(), name='social_account_list'),
    path('socialaccounts/<int:pk>/disconnect/', SocialAccountDisconnectView.as_view(), name='social_account_disconnect'),
]
