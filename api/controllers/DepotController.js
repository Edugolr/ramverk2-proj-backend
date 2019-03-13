/**
 * DepotController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    'addMoney':  async function(req, res) {
        let depotId = req.param('depotId');
        let amount = req.param('amount');

        let depot = await Depot.find({id: depotId});
        let newBalance = depot[0].balance*1 + amount*1;
        var updatedDepot = await Depot.updateOne({ owner: depot[0].owner })
           .set({
               balance: newBalance
           });

        return res.json(updatedDepot);
    }
};
