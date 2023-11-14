from rest_framework import serializers
from django import forms
from .models import TeamSoft
from django.contrib.auth import authenticate
from django.contrib.auth.models import User


class TeamSoftSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamSoft
        fields = [
            "ID",
            "Name",
            "SurName",
            "Email",
            "Telephone",
            "CPF",
            "RG",
            "BirthDate",
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}


class TeamSoftWithUserSerializer(serializers.ModelSerializer):
    user_obj = UserSerializer()

    class Meta:
        model = TeamSoft
        fields = "__all__"

    def create(self, validated_data):
        user_data = validated_data.pop("user")
        user_obj = User.objects.create_user(**user_data)
        teamsoft = TeamSoft.objects.create(user=user_obj, **validated_data)
        return teamsoft


class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=30)
    password = serializers.CharField(max_length=30)

    class Meta:
        model = User
        fields = ["username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def check_user(self, clean_data):
        user = authenticate(
            username=clean_data["username"], password=clean_data["password"]
        )
        return user
