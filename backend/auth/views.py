import os
from django.shortcuts import redirect
from django.http import HttpResponse
from rest_framework.decorators import api_view
from .decrypt import decrypt, bytexor


LOGIN_URL = "https://www.hongik.ac.kr/login.do"
REFER = "?Refer='http://localhost:8000/api/v1/'"
DOMAIN = "hongik.ac.kr"


@api_view(["GET"])
def login_view(request):
    return redirect(LOGIN_URL + REFER)


@api_view(["POST"])
def logout_view(request):
    response = HttpResponse(content={"status": 200})
    response.delete_cookie(key="SUSER_ID", domain=DOMAIN)
    response.delete_cookie(key="SUSER_NAME", domain=DOMAIN)
    response.delete_cookie(key="SUSER_GUBUN", domain=DOMAIN)
    response.delete_cookie(key="SUSER_AUTH", domain=DOMAIN)
    response.delete_cookie(key="SUSER_LIMIT", domain=DOMAIN)
    response.delete_cookie(key="SUSER_AUTHKEY", domain=DOMAIN)
    return response


def check_auth(request):
    get_userid = decrypt