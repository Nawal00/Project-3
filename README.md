# GA Project 3 : A MERN Stack App - Group Project

### Timeframe
7 days

## Technologies used

* JavaScript (ES6), React, Node.js, Express
* HTML5, SCSS, Bulma
* MongoDB, Mongoose, JSON
* Yarn, Babel, Webpack
* BCrypt, oAuth
* Heroku, GitHub/Git
* Chai

## APIs
* FileStack
* Mapbox

## Contributors
* This was a group project with 4 members. The project was managed using Trello and daily stand-ups.

## Installation

1. Set up a project repo by a git master
2. Clone the repo
3. Created basic the back-end and front-end files
4. Set up Webpack and installed all the dependencies packages
5. Set up and run the server
6. Open the `index.html` in browser
8. Deployed on Heroku

### App overview - 'Hidden Gems'

<img width="301" alt="Screenshot 2019-03-26 at 21 32 01" src="https://user-images.githubusercontent.com/42609274/55036245-f06f4180-5011-11e9-80d9-cca6b5aa7215.png">

The Hidden Gem app allows users to look for landmarks or any other places of interest, also referred as 'Gems' on the website. The user can add their own 'Gems' or create 'Trips' using a collection of 'Gems'. The concept of the app is to allow users to share unique places that they've been to and for others to find these places and experience it for themselves.

Key features of the App are being able to follow other users. Navigation to a Gem from user's location to the gem using google maps via Mapbox.

You can find a hosted version at https://wdi-hidden-gems-project-3.herokuapp.com


### Users and sessions
The users can register on Hidden Gems through Register Page and Sign In through Login Page. The users must be logged in to add new gems, create new trips to the database and follow other users.

Signed in users can access their Profile page. From here they can see the number of gems and trips they have uploaded and the users they follow. User profile images are uploaded using FileStack, but the FileStack API key last for 15 days therefore I've taken it off.

<img width="1271" alt="Screenshot 2019-03-26 at 21 51 37" src="https://user-images.githubusercontent.com/42609274/55036049-62935680-5011-11e9-98ab-8eb6662d5ab6.png">
<img width="1271" alt="Screenshot 2019-03-26 at 22 38 52" src="https://user-images.githubusercontent.com/42609274/55038198-fa943e80-5017-11e9-993e-e0fd38b191ce.png">

### Gems
You can view all Gems on the index page and search by category or city. Clicking on a Gem will take you it's show page. Gems are uploaded by a user and can also belong to several Trips.

<img width="1259" alt="Screenshot 2019-03-26 at 22 44 15" src="https://user-images.githubusercontent.com/42609274/55038801-f5d08a00-5019-11e9-8776-2090608fcd71.png">


The Gem show page includes a description, gem's location on a map, comments, name of user who uploaded the gem and list of trips in which the gems has been added to.

<img width="1266" alt="Screenshot 2019-03-26 at 22 50 28" src="https://user-images.githubusercontent.com/42609274/55038697-9d00f180-5019-11e9-8bb7-3c4cf968ea00.png">


### Trips

The Trips section encourages users to explore Gems and incorporate the Gems on their Trip. Signed-in users can create a Trip to complete. A Trip is comprised of a collection of gems and displayed on the map.

<img width="1053" alt="Screenshot 2019-03-26 at 23 07 03" src="https://user-images.githubusercontent.com/42609274/55039399-e6524080-501b-11e9-93bb-a8c05c5e4c16.png">


## Process

The development process started with wireframes to guide the user's journey and core functionality of the site. We then decided the structure of the database and RESTful routes. Once our models were established for our database, we started working on setting up controllers for all routes. The api routes were then tested by making requests with Insomnia.  

With backend functioning, we paced on frontend to set up the RESTful routes with React.js. We referred back to our wireframes to create the layout of the pages and distributed work to implement functionality feature for each page. Functional and stateful components were made where necessary for each pages to ensure effective state management and a route was set up in the app.js file. Once the core frontend functionality was working we shifted our focus on styling the site.

Once we achieved our MVP, we ran tests on all CRUD routes including Login and Registration using Chai and Mocha with up mock data. Finally, we deployed our site on Heroku every other day to minimise any unforeseen deployment bugs.


Making use of git, we carried out individual work on branches for each feature. This was merged with the development branch and any merge conflicts were fixed as a group. Prior to pushing the code to the Master branch, all features were tested on the development branch.

Tasks were managed and assigned through the task manager Trello and we performed daily stand-ups to keep track of progress.

<img width="1275" alt="Screenshot 2019-03-26 at 23 31 05" src="https://user-images.githubusercontent.com/42609274/55040204-472f4800-501f-11e9-98d8-fbb69d36c562.png">

### Challenges

This was my first group project at General Assembly and with React.js. It was a steep learning curve particularly managing state and props. We also used git on our project which introduce new challenges such as conflicts while merging code to development branch and unexpected bug fixing on deployed version of the site.

### Wins

Most part of the project's basic structure was created as a group effort. My responsibility included frontend functionality, routes, error handling, form layout, testing and the site's styling. I was the Trello board owner and implemented daily stand ups to go through our Trello board and keep track of each individuals progress. I was also the Git master which meant, I had to deploy our Master branch code on heroku and debug any issues.  

I created the new gem functionality, including the use of the React Mapbox Autocomplete package that gives you search functionality for any address and converts an address input into geo-coordinates. To make the address of the Gems even more accurate, the users can drag and drop the marker on the map which is on the form.

The component below adds search functionality on the form.

<img width="515" alt="Screenshot 2019-03-27 at 12 26 33" src="https://user-images.githubusercontent.com/42609274/55075761-afb40e80-508b-11e9-9767-ef321ef6540a.png">

The function below converts address input into lat/lng and saves them as an object in the state.

<img width="490" alt="Screenshot 2019-03-27 at 12 25 54" src="https://user-images.githubusercontent.com/42609274/55075769-b478c280-508b-11e9-81ba-5bc61be78008.png">



## Future features

Features that we wanted to add if time allowed are rating system for the gems, messaging and display the routes for multiple gems on the map. This would enhance users experience significantly on our site.
