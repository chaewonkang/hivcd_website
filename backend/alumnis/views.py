from django.shortcuts import render
from rest_framework import generics
from .models import Alumni
from .serializers import AlumniSerializer


class AlumniListCreateAPIView(generics.ListCreateAPIView):
    queryset = Alumni.objects.all()
    serializer_class = AlumniSerializer