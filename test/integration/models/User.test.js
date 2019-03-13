// ./test/integration/models/User.test.js

var util = require('util');

describe('User (model)', function() {

  describe('#attribute firstname type()', function() {
    it('should return ', function (done) {
        if (User.attributes.firstname.type != "string") {
          return done(new Error(
            'error'
          ));
        }//-•

        return done();
      })
    });

    describe('#attribute password type()', function() {
      it('should return 5 users', function (done) {
          if (User.attributes.encryptedPassword.type != "string") {
            return done(new Error(
              'error'
            ));
          }//-•

          return done();
        })
      });

      describe('#attribute email type()', function() {
        it('should return ', function (done) {
            if (User.attributes.email.type != "string") {
              return done(new Error(
                'error'
              ));
            }//-•

            return done();
          })
        });
});
