
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('game_players_cards', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
    cardId: {
      type: Sequelize.INTEGER,
      field: 'card_id',
      references: {
        model: 'cards',
        key: 'id',
      },
    },
    gamePlayerId: {
      type: Sequelize.INTEGER,
      field: 'game_player_id',
      references: {
        model: 'game_players',
        key: 'id',
      },
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('game_players_cards'),
};
