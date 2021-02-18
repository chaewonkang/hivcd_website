import os
from django.shortcuts import redirect
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework import generics
from .serializers import AccountSerializer
from .decrypt import decrypt
from .models import Account

LOGIN_URL = "https://www.hongik.ac.kr/login.do"
MAIN_PAGE = "http://devsidi.hongik.ac.kr/"
DOMAIN = "hongik.ac.kr"


@api_view(["GET"])
def login_view(request):
    suser_id = decrypt(request.COOKIES["SUSER_ID"], os.getenv("AUTH_KEY"))
    suser_id = suser_id[:7]

    try:
        Account.objects.get(suser_id=suser_id)
    except:
        account = Account.objects.create_user(suser_id=suser_id, username=suser_id)

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


@api_view(["GET"])
def user_list(request):
    qs = Account.objects.all()
    serializer = AccountSerializer(qs)
    return JsonResponse(serializer.data)


class AccountListAPIView(generics.ListAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
