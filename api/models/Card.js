/**
 * Stock.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    player: {
        type: 'string',
        required: true
    },
    playerId: {
        type: 'number'
    },
    serie: {
        type: 'string'
    },
    serieCode: {
        type: 'string',
    },
    code: {
        type: 'string',
    },
    team: {
        type: 'string',
    },
    teamId: {
        type: 'number'
    },
    season: {
        type: 'number',
    },
    print: {
        type: 'number',
    },
    printNumber: {
        type: 'number',
    },
    price: {
        type: 'number',
    },
    owner: {
      model: 'depot'
    }
}


};
