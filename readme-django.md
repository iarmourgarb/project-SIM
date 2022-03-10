```python
--
from tables_app.models import User, Artist, Rating, Review
amelia=User("Amelia-Earhart", "Youaom139&yu7")
amelia.save()
otto=User("Otto", "StarWarz2*")
otto.save()
freeway=Artist("Freeway", "Aimee Mann")
freeway.save()
days=Artist("Days of Wine and Roses", "Bill Evans")
days.save()
walls=Artist("These Walls", "Kendrick Lamar")
walls.save()
Rating(username=amelia, song=freeway, rating=3, rate_date="2000-07-02").save()
Rating(username=amelia, song=days, rating=4, rate_date="2000-07-02").save()
Rating(username=otto, song=days, rating=5, rate_date="2000-07-02").save()
Rating(username=amelia, song=walls, rating=4, rate_date="2000-07-02").save()
Review(username=otto, song=freeway, review="This song slaps :o", review_date="2000-06-08").save()
Review(username=amelia, song=walls, review="I hate this song", review_date="2000-06-08").save()


```