module.exports = (sequelize, DataTypes) => {
  const DeckCards = sequelize.define('DeckCards', {
  }, {
    tableName: 'deck_cards',
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp',
  });
  DeckCards.associate = models => {
    DeckCards.belongsTo(models.Cards);
    DeckCards.belongsTo(models.Deck);
  };
  return DeckCards;
};
