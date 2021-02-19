import os
from rest_framework.permissions import BasePermission
from auth.models import Account
from auth.decrypt import decrypt


class CookiePermission(BasePermission):
    """
    시각디자인학과에 관련된 사람인지 판단해서 권한 여부 판단
    """

    def has_permission(self, request, view):
        get_user_id(request.COOKIES)
        try:
            account = Account.objects.get(suser_id=sid)
        except:
            return False

        return account.is_sidi == True


def get_user_id(cookies):
    cookie_id = cookies["SUSER_ID"]
    key = os.getenv("AUTH_KEY")
    decrypt_id = decrypt(s=cookie_id, key=key)
    return decrypt_id[:7]