module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('deck', 'playerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'players',
        key: 'id',
        field: 'player_id',
      },
    }),

    queryInterface.addColumn('deck', 'cardId', {
      type: Sequelize.INTEGER,
      field: 'card_id',
      references: {
        model: 'cards',
        key: 'id',
      },
    }),

    queryInterface.addColumn('deck', 'deckId', {
      type: Sequelize.INTEGER,
      field: 'deck_id',
      references: {
        model: 'deck',
        key: 'id',
      },
    }),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('deck', 'playerId'),
    queryInterface.removeColumn('deck', 'cardId'),
    queryInterface.removeColumn('deck', 'deckId'),
  ]),
};
