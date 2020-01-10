const Card = require('./Cards');
const Deck = require('./Deck');

module.exports = (sequelize, DataTypes) => {
  const DeckCards = sequelize.define('deck-cards', {
  });
  DeckCards.belongsTo(Card);
  DeckCards.belongsTo(Deck);
  return DeckCards;
};
