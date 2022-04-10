from rest_framework import serializers, validators

from .models import User, Artist, Rating

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ('song', 'artist', 'count', 'avgRating')

class RatingSerializer(serializers.ModelSerializer):


    def create(self, validated_data):
        song = validated_data["song"].song
        rating = validated_data["rating"]
        song_object = Artist.objects.get(pk=song)
        count = song_object.count
        avg_rating = song_object.avgRating
        count += 1
        if avg_rating == 0:
            avg_rating += rating
        else:
            avg_rating = (avg_rating * (count-1) + rating)/count
        song_object.count = count
        song_object.avgRating = avg_rating
        song_object.save()

        return Rating.objects.create(**validated_data)

    class Meta:
        model = Rating
        fields = ('id', 'username', 'song', 'artist', 'rating')
        validators = [
        validators.UniqueTogetherValidator(queryset=Rating.objects.all(), fields=['username', 'song'])
    ]