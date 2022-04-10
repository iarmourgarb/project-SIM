from datetime import datetime
from django.db import models
from django.utils import timezone
# Create your models here.
class User(models.Model):
    username = models.CharField(max_length = 255, primary_key = True)
    password = models.CharField(max_length = 255)

    def str_user(self):
        return self.username

class Artist(models.Model):
    song = models.CharField(max_length = 255, primary_key = True)
    artist = models.CharField(max_length = 255)
    count = models.IntegerField(default=0)
    avgRating = models.FloatField(default=0)

    def str_song(self):
        return self.song

    def str_artist(self):
        return self.artist

class Rating(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    song = models.ForeignKey(Artist, on_delete = models.CASCADE)
    artist = models.CharField(max_length = 255, default = "")
    rating = models.IntegerField(default= 0)

    def str_song(self):
        return self.song.str_song()

    def str_rating(self):
        return str(self.rating)
