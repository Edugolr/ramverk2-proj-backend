/**
 * cardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    subscribe: function(req, res) {
      if (!req.isSocket) {
        return res.badRequest();
      }


      sails.sockets.join(req, 'updatedCard', function(err) {
        if (err) {
          return res.serverError(err);
        }

    return res.json({
      message: 'Subscribed to a fun room called updatedCard!'
    });
  });
},
    'buy': async function(req, res) {
         //console.log(req.user);
        let userId= req.param('userId');
        let cardName = req.param('name');

        let user = await User.findOne({id: userId});
        let card = await Card.findOne({player: cardName});

        if (card.owner) {
            return res.json('This item is not avalaiable to buy');
        }
        let depot = await Depot.findOne({owner: user.id});
        let newBalance = depot.balance - card.price;
        if (newBalance < 0) {
            return res.json('Not enough money');
        }
        await Depot.addToCollection(depot.id, 'cards')
        .members([card.id]);

        var updatedDepot = await Depot.updateOne({ owner: user.id })
           .set({
               balance: newBalance
           });

        return res.json(updatedDepot);
     },
     'sell': async function(req, res) {
         let userId= req.param('userId');
         let cardName = req.param('name');

         let user = await User.findOne({id: userId});
         let card = await Card.findOne({player: cardName});
         let depot = await Depot.findOne({owner: user.id});


         let newBalance = depot.balance + card.price;
         var updatedUser = await Depot.updateOne({ owner: user.id })
            .set({
                balance: newBalance
            });
         await Depot.removeFromCollection(depot.id, 'cards', card.id);
         depotCards = await Depot.find(depot.id).populate('cards');
         return res.json(depotCards);
      },
      'notowned': async function(req, res) {
          let cards = await Card.find({owner: null});

          return res.json(cards)
      }
};
