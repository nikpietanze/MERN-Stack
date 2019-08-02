<!-- Tutorial Based on Traversy Media Mern Stack Walkthrough --><br>
<!-- https://www.youtube.com/watch?v=5yTazHkDR4o --><br>

## Front End:

client folder holds all of the React files =><br>
App.js is the main file (brains) of the front end =><br>
components folder houses all of the individual items displayed as Apps on the App.js file =>

## Back End:

MongoDB (database) is being hosted on an AWS server via https://cloud.mongodb.com/user#/atlas/login =><br>
Server.js is the main server file =><br>
config folder houses various keys and secure data =><br>
models folder houses all of the Schema for the database datasets =><br>
routes folder houses all of the front end files for client side.<br>
routes/api folder houses all of the processing files for the various api calls to various models (GET, POST, DELETE, etc).

## Redux:

store.js is the main file for our Redux state controller =><br>
This is implemented into the App.js React file to display on the client side.<br>
This is pulling resources from the reducers folder to pass state data for various elements =><br>
Reducers are essentially pieces of data that you would want to pass throughout your project. Ex: =><br>
Authentication Data, Data Page Tokens, Lists of data, etc.<br>
These extra reducers would get imported into the reducers/index.js file and then added to the list of exported reducers =><br>
Individual reducers (itemReducer.js) houses the actual state for the data, and checks the actions from the action file =><br>
action file will dispatch our data (payload) from the server to the reducer, which then transports that state data to React to display.<br>
actions/types.js is a constants folder that houses const string variables for various actions (GET, ADD, DELETE, etc).<br>
There are also Redux containers inside the components folder. Ex: =><br>
AppNavbar, ItemModal, etc. These are component containers that can be filled with various information / data.

## package.json:

Testing:
To run both front end and back end simutaneously: ### `npm run dev`<br>
To run the back end by itself: ### `npm run server`<br>
To run the front end by itself: ### `npm run client`<br>
Cloning:
To install dependencies: ### `npm install`<br>
A script has been added to automatically install the client side dependencies as well.

## Deployment to Heroku

Make sure client/.git folder is deleted. It's auto-created by the react package builder.<br>
Make sure MongoDB Atlas IP Whitelist has an exemption set to allow access from anywhere to make the database work publicly.<br>
From the project folder, fun the following commands in the terminal =><br>

### `heroku login`

### `heroku create`

### `git init`

### `git all .`

### `git commit -am 'upload message'` - Version 1.0.0 was used

### `heroku git:remote -a \` + encoded heroku path

### `git push heroku master`
