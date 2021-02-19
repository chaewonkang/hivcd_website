import os
from rest_framework.permissions import BasePermission
from auth.models import Account
from auth.decrypt import decrypt

class CookiePermission(BasePermission):
    """
    시각디자인학과에 관련된 사람인지 판단해서 권한 여부 판단
    """

    def has_permission(self, request, view):
        cookies = request.COOKIES
        try:
            sid = decrypt(s=cookies['SUSER_ID'], key=os.getenv("AUTH_KEY"))
            account = Account.objects.get(suser_id=sid):
        except:
            return False
        return account.is_sidi == True
