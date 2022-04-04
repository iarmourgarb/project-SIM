from django.contrib import admin

# Register your models here.
from .models import User, Artist, Rating

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    pass

@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    pass
