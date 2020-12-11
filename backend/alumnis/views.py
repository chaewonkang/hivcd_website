from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Alumni
from .serializers import AlumniSerializer


class AlumniListCreateAPIView(generics.ListCreateAPIView):
    queryset = Alumni.objects.all()
    serializer_class = AlumniSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
