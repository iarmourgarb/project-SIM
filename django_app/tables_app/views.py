from django.shortcuts import render
from .models import User, Rating, Artist
from django.http import Http404


# Create your views here.

#index page
def index(request):
    context={}
    if request.method == "POST":
        #registration form
        if request['registration']:
            context["type"] = "registration"
            username = request['username']
            password = request['password']
            if username == "" and password == "":
                context["error"] = "Empty username and password"
            elif username == "":
                context["error"] = "Empty username"
            elif password == "":
                context["error"] = "No password given"
            else:
                #if we have the text in there
                try:
                    user_check = User.objects.get(pk=username)
                    if user_check:
                        context["error"] = "Username already taken"
                except:
                    User(username=username,password=password).save()
                    context["success"] = "User " + username + " registered successfully"
        #other form
        elif request["song_retrival"]:
            context["type"] = "song_retrival"
            user = request['user']
            if user == "":
                context={"error:" : "No user given"}
            try:
                user_check = User.objects.get(pk=user)
                ratings = Rating.objects.filter(username=user)
                printout = []
                for song in ratings:
                    printout.append(song.song + "-->" + song.rating + '/n')
                context["success"] = printout
            except:
                context["error"] = "User has not rated any songs"
            #check if username is already there
            # try:
            #     user_check = User.objects.get(pk=user)
            # except User.DoesNotExist:
            #     context["error"] = "No such user in the system"
            # try:
            #     ratings= Rating.objects.filter(username=user)
            return render(request, "tables-app/index.html",context)


def index(request):
    if request.method == 'POST':
        username = request.get('username')
        password = request.get('password')
    else:
    return render(request, 'index.html', {'request': request})
