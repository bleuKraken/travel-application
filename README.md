# Travel App

## Overview
- Project Summary
- How to run project
- Running developer
- Extras


## Project Summary  

This project aims to give me the opportunity to put all of the skills I have learned into one project to build my own custom travel app. Due to the nature of this course, it is very JavaScript heavy, but I am still expected to create clean and appealing HTML/CSS. I will also be targeting the DOM, working with objects, and retrieving data from 3 APIs in which one of those is reliant on another to work. Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers.


## How to run project  

0. You must have node installed. If on linux, it can be installed from terminal. Or 
from the offical page [node.js](https://nodejs.org/)

1. Install all dependencies
   > npm install

2. Create the dist folder
   > npm run build-prod

3. Start the server
   > npm run start

The app listens on port 4444, so visit http://localhost:4444 in a web browser to view.


## Running developer 

To view in developer with webpack run 
   > npm run build-dev


## Testing App

Open a terminal inside of the root directory of the project and type 
   > npm run test


## Extras

* Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities). 

* Instead of just pulling a single day forecast, pull the forecast for multiple days.


