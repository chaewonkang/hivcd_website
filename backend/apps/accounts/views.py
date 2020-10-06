from rest_framework import serializers, viewsets
from django.contrib.auth import get_user_model
from rest_framework.response import Response


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'password', )
        extra_kwargs = {'password': {'write_only': True, 'min_length': 8}}

    def create(self, validate_data):
        return get_user_model().objects.create_user(**validate_data)


class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def get_paginated_response(self, data):
        return Response(data)
