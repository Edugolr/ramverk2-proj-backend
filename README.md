# ramverk2-proj-backend

a [Sails v1](https://sailsjs.com) application

## Techs
* Sails.js: framework
* jsonwebtoken: authorization

Sails.js comes packaged with RESTApi on all models, enabling websocket subscribing just by hitting the  /get on the model. This sounded very promising as a backend for my real-time project. Im somewhat familiar with Sails since before, and altough it hasnt been without some struggle to understand it, I really enjoy the quick setup of the RESTApi.
I will go through more about Sails.js in the [Why-Sails document](https://github.com/Edugolr/why-sails)

jsonwebtoken or JWT is the authorization we have worked with throughout the course and that is the reason I choose it as authorization method. It is implemented through the api policies in the file isAuthorized.js where it checks if the incoming request sends a auth.header and if the token is valid. The  routes to secure are handled in config/policies.js.


## Real-time

Sails.js has its own built in sails.io which I choose to use for the application.
It should work out of box on every api model. I however had some problems with broadcasting on update/patch which I dont fully understand. I choose to make a custom route /subsribe to handle it and write my own solution.
Basicly it checks if the call on the route is a socket then joins it to the room I broadcast the price update to.
The room is called updatedCard.
The socket .emit or as sails calls it .broadcast is started in the bootstrap.js file. It runs in a setInterval function and broadcasts to the channel every 2 sec.

I had alot of problems here getting the patch on the Card model to actually emit something to the frontend when I gave up on the built in solution and tried it my own way it went well tough.


## Badges
[![Build Status](https://travis-ci.org/Edugolr/ramverk2-proj-backend.svg?branch=master)](https://travis-ci.org/Edugolr/ramverk2-proj-backend)
[![Maintainability](https://api.codeclimate.com/v1/badges/b36570f7afc13fa15cee/maintainability)](https://codeclimate.com/github/Edugolr/chai17Ramverk2/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/Edugolr/ramverk2-proj-backend/badge.svg?branch=master)](https://coveralls.io/github/Edugolr/ramverk2-proj-backend?branch=master)

## Test results
You can get a text overview of the results on baseUrl/coverage
If you want to view the full report open it on your local server on the path
baseUrl/backend-trading/coverage


## CI
I have used Travis codeclimate and coveralls.
Travis for : building and testing the application
Codeclimate for : showing the codequality
Coveralls for : Showing the codecoverage

Id say Im very pleased with my results, however the Codeclimate did react to alot of Sails code so I choose to ignore them and take away them from the result since I dont have knowledge enough to change the base code of Sails.js
I really enjoy travis where I can check how my build works on different environments, like on my build which uses different node versions.
I like Codeclimate cause it can help me find smelly code, to many reapeats to big annd chunky or maybe repeating the same code many times, Codeclimate spots this for me.
Coveralls give me a quick look on the codecoverage ( I do prefer the local html version from Istanbul tough).

## Test suite
### Tools
* mocha
* supertest
* Istanbul

The application is covered to around 60%. The policies and the DepotController is not tested yet nor is the websocket subscribe in the CardController.
Overall the testing is simple, however I didnt get a grasp on how to test the sails.io or the policies. The models was very easy to test and I experienced no problems there.

Both mocha and supertest have worked out well for the testing.
The Istanbul doesnt support output in .ejs format and Sails.js doesnt support .html as a view format. I have put out a raw text route to view the test coverage (note that no links work in it so you can only look at the overview)
You can get a text overview of the results on [![/coverage](/coverage). Otherwise you can use your local server ex: Apache to view the result on the path
baseUrl/backend-trading/coverage
