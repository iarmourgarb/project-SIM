from rest_framework import serializers, validators
from django.db import models
from django.db.models import Avg
from django.contrib.auth.models import User
from .models import Artist, Rating
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user': user.id,
        })

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'is_active', 'is_authenticated')
        # extra_kwargs = {'password': {'write_only':True}}

    
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.is_active = True
        user.save()
        return user

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
    username = serializers.SerializerMethodField()

    class Meta:
        model = Rating
        fields = ('id','user', 'username', 'song_id', 'song', 'artist', 'rating')
        indexes = [models.Index(fields=["username", "song_id"])]

    def get_artist(self, obj):
        artist = obj.song_id.artist
        return artist

    def get_song(self, obj):
        song = obj.song_id.song
        return song

    def get_username(self, obj):
        user = obj.user
        username = user.username
        return username
