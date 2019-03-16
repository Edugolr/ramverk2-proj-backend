# ramverk2-proj-backend

a [Sails v1](https://sailsjs.com) application


## Badges
[![Build Status](https://travis-ci.org/Edugolr/ramverk2-proj-backend.svg?branch=master)](https://travis-ci.org/Edugolr/ramverk2-proj-backend)
[![Maintainability](https://api.codeclimate.com/v1/badges/b36570f7afc13fa15cee/maintainability)](https://codeclimate.com/github/Edugolr/chai17Ramverk2/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/Edugolr/chai17Ramverk2/badge.svg?branch=master)](https://coveralls.io/github/Edugolr/chai17Ramverk2?branch=master)

## Test results
You can get a text overview of the results on [![/coverage](/coverage)
If you want to view the full report open it on your local server on the path
baseUrl/backend-trading/coverage


## CI
I have used Travis codeclimate and coveralls.
Travis for :
Codeclimate for :
Coveralls for :

I din README skriver du ett stycke om CI-kedjan, vilka tjänster du valt och varför samt eventuella begränsningar i hur CI-kedjan kan hantera din applikation. Du gör en kort reflektion över din syn på den hjälpen liknande verktyg ger dig.

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
