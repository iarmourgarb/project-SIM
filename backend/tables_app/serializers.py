from rest_framework import serializers, validators
from django.db import models
from django.db.models import Avg
from .models import User, Artist, Rating

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

class ArtistSerializer(serializers.ModelSerializer):
    
    avg_rating = serializers.SerializerMethodField()
    class Meta:
        model = Artist
        fields = ('id', 'song', 'artist', 'avg_rating')
        indexes = [models.Index(fields=["song", "artist"])]

    
    def get_avg_rating(self, obj):
        song_id = obj.id
        ratings = Rating.objects.filter(song_id=song_id).aggregate(Avg('rating'))
        return ratings['rating__avg']

class RatingSerializer(serializers.ModelSerializer):

    artist = serializers.SerializerMethodField()
    song = serializers.SerializerMethodField()

    class Meta:
        model = Rating
        fields = ('id', 'username', 'song_id', 'song', 'artist', 'rating')
        indexes = [models.Index(fields=["username", "song_id"])]

    def get_artist(self, obj):
        artist = obj.song_id.artist
        return artist

    def get_song(self, obj):
        song = obj.song_id.song
        return song
