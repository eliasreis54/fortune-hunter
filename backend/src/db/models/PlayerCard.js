const Cards = require('./Cards');
const Player = require('./Players');


module.exports = (sequelize, DataTypes) => {
  const PlayerCards = sequelize.define('Player-cards', {

  });

  PlayerCards.belongsTo(Cards);
  PlayerCards.belongsTo(Player);
  return PlayerCards;
};
