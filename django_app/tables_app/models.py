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

    def str_song(self):
        return self.song

    def str_artist(self):
        return self.artist

class Rating(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    song = models.ForeignKey(Artist, on_delete = models.CASCADE)
    rating = models.IntegerField(default= 1)
    rate_date = models.DateField(default=datetime.now)

    def str_song(self):
        return self.song.str_song()

    def str_rating(self):
        return str(self.rating)

    def str_rate_date(self):
        return str(self.rate_date)

class Review(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    song = models.ForeignKey(Artist, on_delete = models.CASCADE)
    review = models.CharField(max_length=510)
    review_date = models.DateField(default=datetime.now)

    def str_user(self):
        return self.username.str_user()

    def str_song(self):
        return self.song.str_song()

    def str_review(self):
        return self.review

    def str_review_date(self):
        return str(self.review_date)
