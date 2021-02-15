from django.db import models


class Room(models.Model):
    pass


class Tool(models.Model):
    pass


class Reservation(models.Model):
    """
    예약 모델 클래스
    1. 예약 시작일, 예약 종료일, 예약 대상 필드 필요
    2. 예약 시작일, 예약 종료일 validation 필요
    3. 예약 중복 validation 필요
    """

    startday = models.DateTimeField()
    endday = models.DateTimeField()
    rooms = models.ForeignKey("Room", on_delete=models.CASCADE, default="", null=True)
    tools = models.ForeignKey("Tool", on_delete=models.CASCADE)
