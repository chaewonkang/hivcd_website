import requests
from rest_framework import generics
from django.shortcuts import redirect
from django.http import HttpResponse
from .decrypt import decrypt, bytexor

LOGIN_URL = "https://www.hongik.ac.kr/login.do"
DOMAIN = "hongik.ac.kr"


def login_view(request):
    return redirect(LOGIN_URL)


def logout_view(request):
    response = HttpResponse(content={"status": 200})
    response.delete_cookie()
    return response
