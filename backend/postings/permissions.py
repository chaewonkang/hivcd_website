from auth.models import Account
from rest_framework.permissions import BasePermission


class CookiePermission(BasePermission):
    """
    시각디자인학과에 관련된 사람인지 판단해서 권한 여부 판단
    """

    def has_permission(self, request, view):
        cookies = request.COOKIES
        user = request.user

        return Account.objects.get(pk=user.pk).is_sidi == True
