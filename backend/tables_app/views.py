from re import L
from wsgiref.validate import validator
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
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

    @action(detail=False, methods=['post'])
    def new_rating(self, request):
        user = request.data["username"]
        rating = request.data["rating"]
        artist = request.data["artist"]
        song = request.data["song"]
        if not Artist.objects.filter(pk=song):
            new_song = Artist(song=song, artist=artist)
            new_song.save()
        serial = self.serializer_class(data=request.data)
        if serial.is_valid():
            serial.save()
            return Response({'status': 'Rating created'})
        else:
            return Response({'status': 'Song already rated'})
    

class ArtistView(viewsets.ModelViewSet):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()
