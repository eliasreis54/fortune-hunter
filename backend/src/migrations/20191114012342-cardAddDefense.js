'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Cards', 'defense', { type: Sequelize.DataTypes.INTEGER });
  },

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Cards', 'defense'),
};
