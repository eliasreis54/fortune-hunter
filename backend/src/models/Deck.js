const Player = require('./Players');

module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('deck', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Deck.belongsTo(Player);
  return Deck;
};
