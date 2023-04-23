# POST Taking Project 

### Description

This Project is mainly about taking posts from the user. It consists of three html files namely Login.html, Register.html and Post.html. 

A Stylesheet named Style.css is connected to all the html files. Various styling functions like flexbox are used. Many number of images are used in this project.

A javascript file named Script.js is connected to all the html files.

There are two different entities in this project namely USER and POST. USER have attributes namely USERID, Username, Firstname, Lastname, Email and Password. While Post enitity have attributes namely PostID, Post, PostDate and UserID as it's foreign key.

Server is setup with node package manager (npm package).

When a user signs up from the register page, the attributes of user will be stored in the user table of sample_db databse. And the attributes are also stored in the local storage so when it redirects to the Post page, the post attributes of the particular user will be retrieved.

The same happens for the login page but when the user signs in using username and password. We retrieve the user attributes from the user table of sample_db databse and store them in the local storage. When we redirect to the Post page, the post attributes of the particular user will be retrieved.

We make use of various functions to execute CRUD operations of User and posts.

In the Post page, all the posts of the user (the one that logged in) will appear in an unordered list below the submit button.
For each new post, the list will be updated.



### Business Rules

1. A USER may CREATE any number of POSTs.
2. Each POST is CREATED by exactly one USER.

### Entity-Relationship Diagram

![ERD !](/public/images/erd.png)

### Database

Sample_db

