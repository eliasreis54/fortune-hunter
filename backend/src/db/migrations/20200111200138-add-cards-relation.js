module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('cards', 'creatureTypes_id', {
      type: Sequelize.INTEGER,
      field: 'creatureTypes_id',
      references: {
        model: 'creature_types',
        key: 'id',
      },
    }),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('cards', 'creatureTypes_id'),
  ]),
};
