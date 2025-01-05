# SRS Documentation

Project:Online social networking platform for film enthusiasts.
## Introduction
 ### Purpose
The purpose of this Software Requirement Specification (SRS) document is to outline the functional and nonfunctional requirements for the development of the Letterboxd website.

 ### Intended Audience
This platform is intended for film enthusiasts and like-minded people.

 ### Intended Use
It provides an online platform where users can interact with like-minded people to discover, rate, and review films.

 ### Product Scope
The Letterboxd website provides the following functions: 

Create and manage an account using the sign-in and sign-out function.
Search movies by title, genre, date, etc.
Add movies to the website.
Review and Rate movies.
Create a watch-list or task list.
Social features like following other users, etc.
Movie recommendation based on genre or preference.

# Overall Description

 ## 2.1 User Needs

### Search functionality
This functionality is able to search for movies according to users’ preferred genre or title.
The search functionality can accomplish tasks like, finding a particular movie or finding movies in a certain genre, etc.

### Review and Rating functionality
Users will be able to give their opinion on the movie and rate it on a scale of 1-5 stars to show other users how good it is.
The review functionality can help interact with other movie lovers making the users socialize and be in a community with like-minded people.

### Follow functionality
This function will be able to follow others like authors, or  other users to know of their works or their activities.
The following functionality allows users to see more movies made by a certain author or by a certain user.

### Watch-list functionality
This function lets the User make a list of movies they prefer to watch later.
The watch-list function stores the list of movies to watch at a later time.

### Recommendation functionality
Users will be able to receive movie recommendations based on their preferences.
This function provides recommendations of movies that the user might like.

### List creation and management
Users will be able to share a list of movies they like on the website for other users or for private keeping.
Through this function, making playlists of movies will be available.

## 2.2 Assumptions and Dependencies

### Assumptions
The website assumes the following to be available  for proper functioning.

Proper internet connection : Internet connection is assumed to be available in the device.
Browser : The availability of browsers which support the working of the website like chrome, Firefox, etc.
Data integrity : The data provided by the user is assumed to be accurate and truthful.
Device specs : It is assumed that the device has at least the bare minimum performance and storage for the functioning of the website.
Proper working of APIs : It is assumed that the device  supports the proper working of API's like TMDb API used for storing and accessing movie data.
Security : It assumes that the system encrypts the sensitive data such as password.
OS system : It assumed the system of the device to be in the latest version and not too old.

### Dependencies
Front-end : The part of the website which interacts with the user to provide or collect information from the user. It uses React and Angular for front-end development.
Back-end : The part of the website which handles the data. It uses Django and Node.js in the development of the backend of the website.
Databases : The storage that stores the data which can be accessed by the website. Databases such as MySQL, PostgreSQL, and MongoDB are used.
API’s : The methods used by the web to perform functions, store date, etc. in a website.

# System Features and Requirements

## 3.1 Functional Requirements

### User authentication
The system will allow users to enter the website using a username, email ID and password.
User authentication allows the website to have the multi-user feature in the website.This allows simultaneous access of  over 1000 users.
Verification of a new account is done through either Email verification or Two-factor authentication.
A password reset/recovery is also implemented in case the user forgets the password.

### Search functionality
The system allows the user to search for movies according to its title, genre, rating, etc.
Search functionality returns a list of movies similar to the input given in the search box.
This functionality also gives the filter option which can help users narrow down searches according to genre, release date, rating, etc.

### Rate and Review functionality
The system allows users to rate movies and comment on the movie or other users’ reviews. 
Rate functionality is a gauging system that uses 5 stars as scale to rate movies.
The rating system works by taking an average of all the ratings received from the users.
The review functionality allows users to give their opinion or comment on other users’ reviews.
The reviews sent by the users can be edited or deleted by themselves.

### Movie Recommendation
The system provides a personalized list of movies the user might like based on their preferences, ratings, and reviews.
This function selects movies based on the genre, user's ratings, etc.
The user gets recommendations of similar movies after watching a movie.
It selects movies so the user can enjoy watching similar movies.

### Follow functionality
The system allows users to follow other users and see updates on their reviews and lists.
The following functionality allows the user to receive notification (if user wants) on latest updates done by the following users.
The users can also follow movies to see the latest reviews and recommendations.
