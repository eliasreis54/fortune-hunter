
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('game_players', {
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
    coins: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('game_players'),
};
