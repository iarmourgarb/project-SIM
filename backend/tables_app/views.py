from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import UserSerializer, RatingSerializer, ArtistSerializer
from .models import User, Rating, Artist

# Create, Read, Update, Delete of Rating - DONE / except for some more testing but seems to all be in order
# Need to ensure that list functions are correct
# Need editing to be allowed for a song title and artist - Need to also figure out the best way to have it impact editing
 # might necessitate making an id - primary key and sorting it out from there
# Need to allow deleting of ratings separate from song deletion

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class RatingView(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()

    @action(detail=False, methods=['post'])
    def post(self, request):
        song = request.data["song"]
        artist = request.data["artist"]
        if not Artist.objects.filter(song=song, artist=artist):
            new_song = Artist(song=song,artist=artist)
            new_song.save()
        serial = self.serializer_class(data=request.data)
        if serial.is_valid():
            serial.save()
            return Response({'status': 'Rating created'})
        else:
            return Response({'status': 'Song already rated'})

    def put(self, request):
        user = request.data['username']
        song_id = request.data['song_id']
        rating = request.data['rating']
        objs = Rating.objects.filter(username=user, song_id=song_id)
        if objs:
            obj = objs[0]
            obj.rating = rating
            obj.save()
            return Response({'status': "Rating updated"})
        else:
            return Response({'status': 'No rating to update'})
        

class ArtistView(viewsets.ModelViewSet):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()

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