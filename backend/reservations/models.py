from django.db import models
from django.conf import settings


class Reservation(models.Model):
    """
    예약 모델 클래스
    1. 예약 시작일, 예약 종료일, 예약 대상 필드 필요
    2. 예약 시작일, 예약 종료일 validation 필요
    3. 예약 중복 validation 필요
    """

    startday = models.DateTimeField()
    endday = models.DateTimeField()
    # user = models.ForeignKey(
    #     settings.AUTH_USER_MODEL,
    #     related_name="reservations",
    #     db_column="user_snumber",
    #     on_delete=models.CASCADE,
    # )
