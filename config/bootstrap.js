/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

    // if (!socketIOClient) {
    //     var socketIOClient = require('socket.io-client');
    //     var sailsIOClient = require('sails.io.js');
    //
    //     // Instantiate the socket client (`io`)
    //     // (for now, you must explicitly pass in the socket.io client when using this library from Node.js)
    //     var io = sailsIOClient(socketIOClient);
    //     io.sails.url = 'https://backend.chai17.me'
    // await User.findOne({email: 'test@email.com'}).populate('pets');
        await User.createEach([
           { email: 'test@email.com', firstname: 'Test', password: 'test' },
           { email: 'test2@email.com', firstname: 'Test2', password: 'test'},
         ]);
        await Card.create({ player: 'Jake Allen', playerId: 8474596,  serie: 'UD Black', serieCode: '25', code: '6KCZC', team: 'Blues', teamId: 19, season: 2016, print: 299, printNumber: 182, price: 100 })
        await Card.create({ player: 'Tage Thompson', playerId: 8479420, serie: 'UD Exquisite collection', serieCode: 'R-TT', code: 'B928X', team: 'Blues', teamId: 19, season: 2017, print: 299, printNumber: 132, price: 100})
        await Card.create({ player: 'Joe Sakic', playerId: 8451101, serie: 'ULTIMATE COLLECTION', serieCode: 'UAT-SA', code: 'ZJHTX', team: 'Avalanche', teamId: 21, season: 2013, print: 10, printNumber: 4, price: 500 })

        let user = await User.findOne({email: 'test@email.com'});
        let user2 = await User.findOne({email: 'test2@email.com'});
        await Depot.createEach([
            { owner: user.id, balance: 1000 },
            { owner: user2.id, balance: 1001 },
        ]);


        setInterval( async function(){
            let card = await Card.find({})
            for (var i = 0; i < card.length; i++) {
                // console.log(cards[i]);
                var updatedCard = await Card.updateOne({ id: card[i].id})
                    .set({
                            price: card[i].price * 1.002 + 0.6 * (Math.random() >= 0.5 ? +1 : -1)
                });
                sails.sockets.broadcast('updatedCard', 'card', { id: [updatedCard.id], price: [updatedCard.price]});
            }

        }, 2000);


  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

};
