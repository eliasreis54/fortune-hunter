const CreatureType = require('./CreatureType');

module.exports = (sequelize, DataTypes) => {
  const Cards = sequelize.define('Cards', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    coust: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    income: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Cards.belongsTo(CreatureType);
  return Cards;
};
