from datetime import datetime
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
# Create your models here.
# class User(models.Model):
#     username = models.CharField(max_length = 255, primary_key = True)
#     password = models.CharField(max_length = 255)

#     def str_user(self):
#         return self.username

class Artist(models.Model):
    song = models.CharField(max_length = 255)
    artist = models.CharField(max_length = 255)

    def __str__(self) -> str:
        return str(self.id) + self.song + self.artist

    def str_song(self):
        return self.song

    def str_artist(self):
        return self.artist

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    song_id = models.ForeignKey(Artist, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)

    def str_song(self):
        return self.song.str_song()

    def str_rating(self):
        return str(self.rating)
