from rest_framework import serializers, validators

from .models import User, Artist, Rating

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ('song', 'artist')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id', 'username', 'song', 'rating')
        validators = [
        validators.UniqueTogetherValidator(queryset=Rating.objects.all(), fields=['username', 'song'])
    ]