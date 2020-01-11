module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('deck_cards', 'deckId', {
      type: Sequelize.INTEGER,
      field: 'deck_id',
      references: {
        model: 'deck',
        key: 'id',
      },
    }),

    queryInterface.addColumn('deck_cards', 'cardId', {
      type: Sequelize.INTEGER,
      field: 'card_id',
      references: {
        model: 'cards',
        key: 'id',
      },
    }),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('deck', 'deckId'),
    queryInterface.removeColumn('deck', 'cardId'),
  ]),
};
