from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import TeamSoftWithUserSerializer, LoginSerializer, TeamSoftSerializer
from .models import TeamSoft
from django.contrib.auth import get_user_model, login, logout
from django.contrib.auth.models import User

# Create your views here.
@api_view(['GET', 'POST'])
def register_view(request):
    serializer = TeamSoftWithUserSerializer(data=request.data)
    serializer.is_valid()
    print(serializer.errors)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def login_view(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.check_user(request.data)
        login(request, user)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def logout_view(request):
    logout(request)
    return Response()

@api_view(['GET'])
def user_view(request):
    team_member = TeamSoft.objects.get(user=request.user)
    serializer = TeamSoftSerializer(team_member, many=False)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def update_user_view(request):
    if request.method == 'POST':
        team_member = TeamSoft.objects.get(user=request.user)
        serializer = TeamSoftSerializer(instance=team_member, data=request.data)
        if serializer.is_valid():
            serializer.save()
    else:
        team_member = TeamSoft.objects.get(user=request.user)
        serializer = TeamSoftSerializer(team_member, many=False)
    return Response(serializer.data)