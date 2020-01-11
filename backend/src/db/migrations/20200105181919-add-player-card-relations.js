module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('player_cards', 'playerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'players',
        key: 'id',
        field: 'player_id',
      },
    }),

    queryInterface.addColumn('player_cards', 'cardId', {
      type: Sequelize.INTEGER,
      field: 'card_id',
      references: {
        model: 'cards',
        key: 'id',
      },
    }),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('deck', 'playerId'),
    queryInterface.removeColumn('deck', 'cardId'),
  ]),
};
