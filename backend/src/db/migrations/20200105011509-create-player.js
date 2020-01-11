
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('players', {
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
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nick: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    wins: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    defeats: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('players'),
};
