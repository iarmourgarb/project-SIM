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
        fields = ('song', 'artist', 'avg_rating')
    
    def get_avg_rating(self, obj):
        song = obj.song
        ratings = Rating.objects.filter(song=song).aggregate(Avg('rating'))
        return ratings

class RatingSerializer(serializers.ModelSerializer):

    artist = serializers.SerializerMethodField()
    class Meta:
        model = Rating
        fields = ('id', 'username', 'song', 'rating', 'artist')
        validators = [validators.UniqueTogetherValidator(queryset=Rating.objects.all(), fields=['username', 'song'])]
        indexes = [models.Index(fields=["username", "song"])]

    def get_artist(self, obj):
        return obj.song.artist
