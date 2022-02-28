from django.db import models

class User(models.Model):
    username = models.charField(max_length = 255, primary_key = True)
    password = models.CharField(max_length = 255)

class Artist(models.Model):
    song = models.CharField(max_length = 255, primary_key = True)
    artist = models.CharField(max_length = 255)

class Rating(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    song = models.ForeignKey(Artist, on_delete = models.CASCADE)
    rating = models.IntegerField(max_length = 1)
