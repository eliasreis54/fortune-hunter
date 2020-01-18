module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'deck',
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp',
  });

  Deck.associate = models => Deck.belongsTo(models.Players);
  return Deck;
};
