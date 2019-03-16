// test/integration/controllers/IndexController.test.js
var supertest = require('supertest');

// describe('CardController.subscribe', function() {
//
//   describe('#subscribe()', function() {
//     it('should return a json file', function (done) {
//       supertest(sails.hooks.http.app)
//       .get('/card/subsribe')
//       .expect('Content-Type', /json/, done)
//     });
//   });
// });
//


//
describe('CardController.buy', function() {

  describe('#buy()', function() {
    it('should return a json file', function (done) {
      supertest(sails.hooks.http.app)
      .post('/card/buy')
      .send({ userEmail: 'test@email.com', name: 'Jake Allen' })
      .expect('Content-Type', /json/, done)
    });
  });
});

//
describe('CardController.buy', function() {

  describe('#buy()', function() {
    it('should return a json file second buy on same card, not avaliable to buy', function (done) {
      supertest(sails.hooks.http.app)
      .post('/card/buy')
      .send({ userEmail: 'test@email.com', name: 'Jake Allen' })
      .expect('"This item is not avalaiable to buy"')
      .expect('Content-Type', /json/, done)
    });
  });
});

//
describe('CardController.buy', function() {

  describe('#buy()', function() {
    it('should return a json file not enough money', function (done) {
      supertest(sails.hooks.http.app)
      .post('/card/buy')
      .send({ userEmail: 'nomoney@email.com', name: 'Joe Sakic' })
      .expect('"Not enough money"')
      .expect('Content-Type', /json/, done)
    });
  });
});

describe('CardController.sell', function() {
  describe('#sell()', function() {
    it('faulty email  should return a json file', function (done) {
      supertest(sails.hooks.http.app)
      .post('/card/sell')
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
