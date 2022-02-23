<!-- for question 1 on homework 2: creating 3 tables in a new database using phpMyAdmin -->


```sql
-- users table (primary key: username)
CREATE TABLE users (
    username varchar(255) NOT NULL PRIMARY KEY,
    password varchar(255));

INSERT INTO users (username, password)
    VALUES ("Amelia-Earhart", "Youaom139&yu7");
INSERT INTO users (username, password)
    VALUES ("Otto", "StarWars2*");
```

```sql
-- ratings table (primary key: id)
CREATE TABLE ratings (id int(1) PRIMARY KEY AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    song varchar(255) NOT NULL,
    rating int(1),
    FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE;
    FOREIGN KEY (song) REFERENCES artists(song) ON DELETE CASCADE;

INSERT INTO ratings (username, song, rating)
    VALUES ("Amelia-Earhart", "Freeway", "3");
INSERT INTO ratings (username, song, rating)
    VALUES ("Amelia-Earhart", "Days of Wine and Roses", "4");
INSERT INTO ratings (username, song, rating)
    VALUES ("Otto", "Days of Wine and Roses", "5");
INSERT INTO ratings (username, song, rating)
    VALUES ("Amelia-Earhart", "These Walls", "4");
```

```sql
-- artists table (primary key: song)
CREATE TABLE artists (
    song varchar(255) NOT NULL PRIMARY KEY,
    artist varchar(255) NOT NULL);

INSERT INTO artists (song, artist)
    VALUES ("Freeway", "Aimee Mann");
INSERT INTO artists (song, artist)
    VALUES ("Days of Wine and Roses", "Bill Evans");
INSERT INTO artists (song, artist)
    VALUES("These Walls", "Kendrick Lamar");

```
