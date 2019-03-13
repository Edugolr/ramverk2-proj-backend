// test/integration/controllers/IndexController.test.js
var supertest = require('supertest');

describe('UserController.list', function() {

  describe('#check()', function() {
    it('should return a json file', function (done) {
      supertest(sails.hooks.http.app)
      .get('/user/list')
      .expect('Content-Type', /json/, done)
    });
  });
});
//



describe('UserController.register', function() {

  describe('#register()', function() {
    it('should return a json file', function (done) {
      supertest(sails.hooks.http.app)
      .post('/user/register')
      .send({ firstname: "register", email: 'register@test.com', password: 'register' })
      .expect(201, done)
    });
  });
});

describe('UserController.login', function() {
  describe('#login()', function() {
    it('faulty email  should return a json file', function (done) {
      supertest(sails.hooks.http.app)
      .post('/user/login')
      .send({ firstname: "register", email: 'faulty@test.com', password: 'register' })
      .expect( 'Not Found', done)
    });
  });
});

describe('UserController.login', function() {
  describe('#login()', function() {
    it('no email should return a json file', function (done) {
      supertest(sails.hooks.http.app)
      .post('/user/login')
      .send({ firstname: "register", password: 'register' })
      .expect('Content-Type', /json/)
      .expect( '{\n  "err": "Email or password cannot be empty"\n}', done)
    });
  });
});
