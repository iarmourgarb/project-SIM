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
    rating int(1));

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

INSERT INTO artists (first_name, last_name, email, phone, birthdate)
    VALUES ("Peter", "Rabbit", "peter@rabbit.com", "555-6666", "2002-06-24");
INSERT INTO artists (first_name, last_name, email, phone, birthdate)
    VALUES ("Alice", "Wonderland", "alice@wonderland.com", "555-4444", "2002-07-04");
```
