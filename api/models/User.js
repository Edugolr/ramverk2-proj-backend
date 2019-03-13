/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = {

    attributes: {
        firstname: {
            type: 'string',
            required: true
        },
        lastname: {
            type: 'string'
        },
        email: {
            type: 'string',
            isEmail: true,
            unique: true,
            required: true
        },
        encryptedPassword: {
            type: 'string'
        },
        depots: {
         collection: 'depot',
         via: 'owner'
        },

    },
    customToJSON: function() {
        // Return a shallow copy of this record with the password and ssn removed.
        return _.omit(this, ['encryptedPassword'])
    },
    /* Lifecycle Callbacks */
    beforeCreate: function(values, cb) {
        // if(!values.password || !values.confirmation || values.password != values.confirmation) {
        // 	return cb({err: ["Password does not match confirmation"]});
        // }
        // Hash password
        bcrypt.hash(values.password, saltRounds, function(err, hash) {
            if (err) return cb(err);
                values.encryptedPassword = hash;

            //Delete the passwords so that they are not stored in the DB
            delete values.password;
            delete values.confirmation;

            //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
            cb();
        });
    }

};
