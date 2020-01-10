const Card = require('./Cards');
const GamePlayer = require('./GamePlayer');

module.exports = (sequelize, DataTypes) => {
  const GamePlayerCard = sequelize.define('game-player-cards', {
  });
  GamePlayerCard.belongsTo(Card);
  GamePlayerCard.belongsTo(GamePlayer);
  return DeckCards;
};
