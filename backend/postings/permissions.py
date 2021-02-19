import os
from rest_framework.permissions import BasePermission
from auth.models import Account
from auth.decrypt import decrypt


class CookiePermission(BasePermission):
    """
    시각디자인학과에 관련된 사람인지 판단해서 권한 여부 판단
    """

    def has_permission(self, request, view):
        cookie_id = request.COOKIES["SUSER_ID"]
        key = os.environ.get("AUTH_KEY")
        s_id = decrypt(s=cookie_id, key=key)
        sid = s_id[:7]
        try:
            account = Account.objects.get(suser_id=sid)
        except:
            return False

        return account.is_sidi == True
