from wsgiref.util import request_uri
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, RatingSerializer, ArtistSerializer
from .models import Rating, Artist
from django.contrib.auth.models import User

# Create, Read, Update, Delete of Rating - DONE / except for some more testing but seems to all be in order

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    authentication_classes = (TokenAuthentication,)

    @action(detail=False, methods=['post'])
    def find(self, request):
        username = request.data['username']
        users = User.objects.filter(username=username)
        if users:
            user = users[0]
            userID = user.id
            return Response({'id':userID})
        else:
            return Response({'status': 'No user'})


class RatingView(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()
    permission_classes = (IsAuthenticated,)

    @action(detail=False, methods=['post', 'get'])
    def post(self, request):
        if request.method == 'POST':
            user = request.data["user"]
            song = request.data["song"]
            artist = request.data["artist"]
            artists = Artist.objects.filter(song=song, artist=artist)
            if not artists:
                new_song = Artist.objects.create(song=song, artist=artist)
                new_song.save()
                song_id = new_song.id
            else:
                song_id = artists[0].id
            ratings = Rating.objects.filter(user_id=user, song_id = song_id)
            if ratings:
                return Response({'status': 'Song already rated'})
            else:
                try:
                    request.data._mutable=True
                except:
                    pass
                request.data["song_id"]=song_id
                serial = self.serializer_class(data=request.data)
                if serial.is_valid():
                    serial.save()
                    return Response({'status': 'Rating created'})
                else:
                    return Response({'status': serial.errors})
        else:
            return Response({'status': 'working'})

    @action(detail=False, methods=['post'])
    def find(self, request):
        user = request.data['user']
        song = request.data['song_id']
        ratings = Rating.objects.filter(user=user, song_id=song)
        if ratings:
            rating = ratings[0]
            id = rating.id
            rate = rating.rating
            return Response({'status': 'Rating found', 'id': id, 'rating': rate})
        else:
            return Response({'status': 'No rating exists'})

    def put(self, request):
        id = request.data['id']
        rating = request.data['rating']
        obj = Rating.objects.filter(id=id)[0]
        obj.rating = rating
        obj.save()
        return Response({'status': "Rating updated"})
        
        

class ArtistView(viewsets.ModelViewSet):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()
    permission_classes = (IsAuthenticated,)


    def put(self, request):
        id = request.data['id']
        song = request.data['song']
        artist = request.data['artist']
        objs = Artist.objects.filter(pk=id)
        if objs:
            obj = objs[0]
            obj.song = song
            obj.artist = artist
            obj.save()
            return Response({'status': 'Song updated'})
        else:
            return Response({'status': 'Song not updated'})
