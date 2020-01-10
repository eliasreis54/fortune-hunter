module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('cards', {
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
    description: {
      type: Sequelize.TEXT,
    },
    coust: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    attack: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    income: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('cards'),
};
