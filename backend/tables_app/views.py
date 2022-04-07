from re import L
from wsgiref.validate import validator
from django.shortcuts import render
from rest_framework import viewsets, validators
from .serializers import UserSerializer, RatingSerializer, ArtistSerializer
from .models import User, Rating, Artist

# 
# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class RatingView(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()
    validators = [
        validators.UniqueTogetherValidator(queryset=Rating.objects.all(), fields=['username', 'song'])
    ]

class ArtistView(viewsets.ModelViewSet):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()
