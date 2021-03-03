import os
from rest_framework.permissions import BasePermission
from auth.models import Account
from auth.decrypt import decrypt
from api_v1.utils import get_user_id


class CookiePermission(BasePermission):
    """
    시각디자인학과에 관련된 사람인지 판단해서 권한 여부 판단
    """

    def has_permission(self, request, view):
        try:
            sid = get_user_id(request.COOKIES)
            try:
                account = Account.objects.get(suser_id=sid)
            except:
                return False
            return account.is_sidi == True
        except:
            is_allowed = request.COOKIES['IS_PROFESSOR_OR_WORKER']
            if is_allowed == 'True':
                return True 
            else:
                return False

