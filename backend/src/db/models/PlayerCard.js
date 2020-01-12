module.exports = (sequelize, DataTypes) => {
  const PlayerCards = sequelize.define('PlayerCards', {
  }, {
    tableName: 'player_cards',
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp',
  });

  PlayerCards.associate = models => {
    PlayerCards.belongsTo(models.Cards);
    PlayerCards.belongsTo(models.Players);
  };
  return PlayerCards;
};
