from django.shortcuts import render
from .models import User, Rating, Artist
from django.http import Http404


# Create your views here.

#index page
def index(request):
    context={}
    if request.method == "POST":
        #registration form
        try:
            request.POST['registration']
            context["type"] = "registration"
            username = request.POST['username']
            password = request.POST['password']
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
        except:
            pass
        #other form
        try:
            request.POST["song_retrieval"]
            context["type"] = "song_retrieval"
            user = request.POST['user']
            if user == "":
                context={"error:" : "No user given"}
            try:
                user_check = User.objects.get(pk=user)
                ratings = Rating.objects.filter(username=user)
                if len(ratings) == 0:
                    context["error"] = "User has not rated any songs"
                printout = []
                for i in ratings:
                    printout.append(i.str_song() + " --> " + i.str_rating())
                context["ratings"] = printout
            except:
                context["error"] = "Unknown User "
        except:
            raise Http404("I don't know how you did this")
            
    return render(request, "tables_app/index.html",context)