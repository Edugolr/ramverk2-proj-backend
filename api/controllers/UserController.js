/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const bcrypt = require('bcrypt');
module.exports = {
   //  _config: {
   //     actions: true,
   //     shortcuts: false,
   //     rest: false
   // },
   'list': async function(req, res) {
        //console.log(req.user);
        let users = await User.find();
        return res.json(users);
    },
   'register': async function(req, res) {
       var user = await User.create(req.body).fetch();
       await Depot.create({ owner: user.id, balance: 1000 });
        // User.create(req.body).exec(function(err, newUser) {
        //     if (err) {
        //         return res.status(409).serverError(err);
        //     }
        User.publish(user);
        return res.status(201).json(user);
    },
    'login': function(req, res) {
        //Return error if email or password are not passed
        if (!req.body.email || !req.body.password) {
            return res.badRequest({
                err: "Email or password cannot be empty"
            });
        }
        //Find the user from email
        User.findOne({
            email: req.body.email
        }).exec(function(err, user) {
            if (err) {
                return res.serverError(err);
            }
            if (!user) {
                return res.notFound({err: 'Could not find email,' + req.body.email + ' sorry.'});
            }
            bcrypt.compare(req.body.password, user.encryptedPassword, function(err, result) {
               if(result) {
                   //password is a match
                   return res.json({
                       user:user,
                       token: jwToken.sign(user)//generate the token and send it in the response
                   });
               } else {
                   //password is not a match
                   return res.forbidden({err: 'Email and password combination do not match'});
               }
           });
        });
    }

};
