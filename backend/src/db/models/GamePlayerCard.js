const Card = require('./Cards');
const GamePlayer = require('./GamePlayer');

module.exports = (sequelize, DataTypes) => {
  const GamePlayerCards = sequelize.define('GamePlayerCards', {
  }, {
    tableName: 'game_player_cards',
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp',
  });

  GamePlayerCards.associate = models => {
    GamePlayerCards.belongsTo(models.Cards);
    GamePlayerCards.belongsTo(models.GamePlayer);
  };
  return GamePlayerCards;
};
