from django.urls import path
from . import views

urlpatterns = [
    # ex: /tables_app/
    path('', views.index, name='index'),

]
