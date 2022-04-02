from django.shortcuts import render
from .models import User, Rating, Artist, Review
from django.http import Http404


# Create your views here.

#index page
def index(request):
    context={}
    # Check if an HTTP Post request has been made 
    if request.method == "POST":
        #User registration form
        if "registration" in request.POST:
            context["type"] = "registration"
            username = request.POST['username']
            password = request.POST['password']
            # Handle missing form responses
            if username == "" and password == "":
                context["error"] = "Empty username and password"
            elif username == "":
                context["error"] = "Empty username"
            elif password == "":
                context["error"] = "Empty password"
            else:
                # Check to see if the given username is already taken, if not a new user is created
                try:
                    user_check = User.objects.get(pk=username)
                    if user_check:
                        context["error"] = "Username already taken"
                except:
                    User(username=username,password=password).save()
                    context["success"] = "User " + username + " registered successfully"
        # Rating retrieval form
        elif "song_retrieval" in request.POST:
            context["type"] = "song_retrieval"
            user = request.POST['user']
            # Check to see if a username has been provided
            if user == "":
                context["error"] = "No user given"
            else:
                # Check if the given username corresponds to a registered user
                try:
                    user_check = User.objects.get(pk=user)
                    ratings = Rating.objects.filter(username=user)
                    # Check if the user has rated any songs
                    if len(ratings) == 0:
                        context["error"] = "User has not rated any songs"
                    printout = []
                    for i in ratings:
                        printout.append(i.str_song() + " --> " + i.str_rating() + "; " + i.str_rate_date())
                    context["ratings"] = printout
                except:
                    context["error"] = "User does not exist"
        # Review retrieval form
        elif "reviews" in request.POST:
            context["type"] = "review_retrieval"
            date = request.POST['date']
            # Handle the case in which no date has been provided
            if date == "":
                context['error'] = "No date provided"
            else:
                # If a date was provided check if there are any reviews on that day, and if so return them
                reviews = Review.objects.filter(review_date=date)
                if len(reviews) == 0:
                    context['error'] = "No reviews written on " + date
                else:
                    printout = []
                    for i in reviews:
                        printout.append(i.str_user() + ": " + i.str_song() + " --> " + "\"" + i.str_review() + "\"")
                    context['reviews'] = printout
            
    return render(request, "tables_app/index.html",context)