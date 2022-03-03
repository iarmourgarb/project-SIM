from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length = 255, primary_key = True)
    password = models.CharField(max_length = 255)

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

    def str_song(self):
        return self.song.str_song()
    
    def str_rating(self):
        return str(self.rating)