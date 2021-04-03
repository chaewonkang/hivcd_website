import os
from django.shortcuts import redirect
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import logout
from rest_framework.decorators import api_view
from rest_framework import generics
from api_v1.utils import get_user_id
from .serializers import AccountSerializer
from .decrypt import decrypt
from .models import Account

LOGIN_URL = "https://www.hongik.ac.kr/login.do"
MAIN_PAGE = "https://sidi.hongik.ac.kr/"
DOMAIN = "hongik.ac.kr"


@api_view(["GET"])
def login_view(request):
    response = redirect(MAIN_PAGE)
    try:
        suser_id = get_user_id(request.COOKIES)
        try:
            Account.objects.get(suser_id=suser_id)
        except:
            account = Account.objects.create_user(suser_id=suser_id, username=suser_id)

    except:
        response.set_cookie("IS_PROFESSOR_OR_WORKER", "True")

    return response


@api_view(["GET"])
def logout_view(request):
    logout(request)
    response = HttpResponse(content="success")

    for cookie in request.COOKIES:
        response.delete_cookie(cookie)
    # response.delete_cookie(key="SUSER_ID", domain=DOMAIN)
    # response.delete_cookie(key="SUSER_NAME", domain=DOMAIN)
    # response.delete_cookie(key="SUSER_GUBUN", domain=DOMAIN)
    # response.delete_cookie(key="SUSER_AUTH", domain=DOMAIN)
    # response.delete_cookie(key="SUSER_LIMIT", domain=DOMAIN)
    # response.delete_cookie(key="SUSER_AUTHKEY", domain=DOMAIN)
    # response.delete_cookie(key="SUSER_LAST", domain=DOMAIN)
    # response.delete_cookie(key="SUSER_LAST_IP", domain=DOMAIN)
    # response.delete_cookie(key="SUSER_EXTAUTH", domain=DOMAIN)
    # response.delete_cookie(key="SUSER_LOGID", domain=DOMAIN)
    # response.delete_cookie(key="SUSER_LOGKEY", domain=DOMAIN)
    # response.delete_cookie(key="hongik_abeek_sso", domain=DOMAIN)
    # response.delete_cookie(key="IS_PROFESSOR_OR_WORKER", domain=DOMAIN)
    return response


@api_view(["GET"])
def user_list(request):
    qs = Account.objects.all().cache()
    serializer = AccountSerializer(qs)
    return JsonResponse(serializer.data)


class AccountListAPIView(generics.ListAPIView):
    queryset = Account.objects.all().cache()
    serializer_class = AccountSerializer
