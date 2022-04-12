from django.contrib import admin
from django.contrib.auth.models import User

# Register your models here.
from .models import Artist, Rating

# @admin.register(User)
# class UserAdmin(admin.ModelAdmin):
    # pass

@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    pass

@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    pass
