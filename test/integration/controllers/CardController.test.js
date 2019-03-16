// test/integration/controllers/IndexController.test.js
var supertest = require('supertest');

describe('CardController.subscribe', function() {

  describe('#subscribe()', function() {
    it('should return a json file', function (done) {
      supertest(sails.hooks.http.app)
      .get('/Card/subsribe')
      .expect('Content-Type', /json/, done)
    });
  });
});
//


//
describe('CardController.buy', function() {

  describe('#buy()', function() {
    it('should return a json file', function (done) {
      supertest(sails.hooks.http.app)
      .post('/Card/buy')
      .send({ userEmail: 'test@email.com', name: 'Jake Allen' })
      .expect('Content-Type', /json/, done)
    });
  });
});

describe('CardController.sell', function() {
  describe('#sell()', function() {
    it('faulty email  should return a json file', function (done) {
      supertest(sails.hooks.http.app)
      .post('/Card/sell')
      .send({ userEmail: "test@email.com", name: 'Jake Allen' })
      .expect('Content-Type', /json/, done)
    });
  });
});

describe('CardController.notowned', function() {
  describe('#notowned()', function() {
    it('no email should return a json file', function (done) {
      supertest(sails.hooks.http.app)
      .post('/Card/notowned')
      .expect('Content-Type', /json/, done)
    });
  });
});
