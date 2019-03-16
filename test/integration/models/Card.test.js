// ./test/integration/models/Card.test.js

var util = require('util');

describe('Card (model)', function() {

    describe('#attribute player type()', function() {
        it('should return string', function (done) {
            if (Card.attributes.player.type != "string") {
              return done(new Error(
                'error'
              ));
            }//-•

            return done();
         })
    });

    describe('#attribute playerId type()', function() {
        it('should return number', function (done) {
            if (Card.attributes.playerId.type != "number") {
            return done(new Error(
                'error'
            ));
        }//-•

            return done();
        })
    });
    describe('#attribute code type()', function() {
        it('should return string', function (done) {
            if (Card.attributes.code.type != "string") {
            return done(new Error(
                'error'
            ));
        }//-•

            return done();
        })
    });
    describe('#attribute team type()', function() {
        it('should return string', function (done) {
            if (Card.attributes.team.type != "string") {
            return done(new Error(
                'error'
            ));
        }//-•

            return done();
        })
    });
    describe('#attribute teamId type()', function() {
        it('should return number', function (done) {
            if (Card.attributes.teamId.type != "number") {
            return done(new Error(
                'error'
            ));
        }//-•

            return done();
        })
    });
    describe('#attribute season type()', function() {
        it('should return number', function (done) {
            if (Card.attributes.season.type != "number") {
            return done(new Error(
                'error'
            ));
        }//-•

            return done();
        })
    });
    describe('#attribute print type()', function() {
        it('should return number', function (done) {
            if (Card.attributes.print.type != "number") {
            return done(new Error(
                'error'
            ));
        }//-•

            return done();
        })
    });
    describe('#attribute printNumber type()', function() {
        it('should return number', function (done) {
            if (Card.attributes.printNumber.type != "number") {
            return done(new Error(
                'error'
            ));
        }//-•

            return done();
        })
    });
    describe('#attribute price type()', function() {
        it('should return number', function (done) {
            if (Card.attributes.price.type != "number") {
            return done(new Error(
                'error'
            ));
        }//-•

            return done();
        })
    });
    describe('#attribute serie type()', function() {
        it('should return string', function (done) {
            if (Card.attributes.serie.type != "string") {
                return done(new Error(
                    'error'
                ));
            }//-•

            return done();
        })
    });
    describe('#attribute serieCode type()', function() {
        it('should return string', function (done) {
            if (Card.attributes.serieCode.type != "string") {
                return done(new Error(
                    'error'
            ));
        }//-•

            return done();
        })
    });
    // describe('#attribute owner type()', function() {
    //     it('should return number', function (done) {
    //         if (Card.attributes.owner.type != "number") {
    //         return done(new Error(
    //             'error'
    //         ));
    //     }//-•
    //
    //         return done();
    //     })
    // });

});
