#DIY share
[![Heroku App Status](https://heroku-shields.herokuapp.com/shrouded-hamlet-84975)](https://shrouded-hamlet-84975.herokuapp.com)

A social platform for DIY projects. People can share their work, view the other's and discuss them in comments.

It was my second project at General Assembly's WDI course, and the first one that uses server-side coding.
 
** Screen shot **

##Prerequisites

- Node.js
- npm
- MongoDB
- gulp

##Build

Clone this repository:

    git clone https://github.com/weresquirrel/wdi-project-2 <project-dir> 
    cd <project-dir>

install dependencies:

    npm install
    
create mongo database schema and populate with sample data:

	npm run seed

run the application in development mode (restarts server when files are changed):
	
	gulp

or run as standalone application (by default on port 3000):

	npm run start
	
##Technologies used

- Node.js
- Express.js
- MongoDB / Mongoose
- EJS Layouts
- Bluebird
- Bcrypt
- Javascript (ECMAScript 6)
- jQuery
- Bootstrap
- SCSS
- HTML
- Heroku

##Challenges Faced

This was the first project I written using server-side code, so I had to learn the distinction of which code is running where, how do they communicate with each other (so I learned about RESTful applications as well). I also learned about how to implement a basic authentication system.

This was my first use of databases too, so my first exposure to data modeling.

Another new experience was using css frameworks and scss too, I really enjoyed them (compared to having to hand-craft everything). 

While not the most important feature, the achievement I felt the most proud about was the multiple image preview before submitting a post.


##Future plans / roadmap

- Allow users to rate (or like) others' posts
- Have different kinds of posts (e.g. tutorials, with steps)
- Improve the error handling
- Further improve styling for smaller screens / mobile devices 


##Acknowledgement

The sample data is using images from [Unsplash](https://unsplash.com/)