import os
from django.shortcuts import redirect
from django.http import HttpResponse
from rest_framework.decorators import api_view
from .decrypt import decrypt, bytexor
from .models import Account

LOGIN_URL = "https://www.hongik.ac.kr/login.do"
MAIN_PAGE = "http://devsidi.hongik.ac.kr/"
DOMAIN = "hongik.ac.kr"


@api_view(["GET"])
def login_view(request):
    cookies = request.cookies
    if Account.objects.get(suser_id=decrypt(cookies["SUSER_ID"])):
        pass
    else:
        account = Account.objects.create_user(
            username=decrypt(cookies["SUSER_NAME"]),
            suser_id=decrypt(cookies["SUSER_ID"]),
        )
    return redirect(MAIN_PAGE)


@api_view(["GET"])
def logout_view(request):
    response = HttpResponse(content="success")
    response.delete_cookie(key="SUSER_ID", domain=DOMAIN)
    response.delete_cookie(key="SUSER_NAME", domain=DOMAIN)
    response.delete_cookie(key="SUSER_GUBUN", domain=DOMAIN)
    response.delete_cookie(key="SUSER_AUTH", domain=DOMAIN)
    response.delete_cookie(key="SUSER_LIMIT", domain=DOMAIN)
    response.delete_cookie(key="SUSER_AUTHKEY", domain=DOMAIN)
    response.delete_cookie(key="SUSER_LAST", domain=DOMAIN)
    response.delete_cookie(key="SUSER_LAST_IP", domain=DOMAIN)
    response.delete_cookie(key="SUSER_EXTAUTH", domain=DOMAIN)
    response.delete_cookie(key="SUSER_LOGID", domain=DOMAIN)
    response.delete_cookie(key="SUSER_LOGKEY", domain=DOMAIN)
    response.delete_cookie(key="hongik_abeek_sso", domain=DOMAIN)
    return response


def check_auth(request):
    get_userid = decrypt