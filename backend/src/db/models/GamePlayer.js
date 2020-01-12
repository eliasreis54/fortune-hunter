module.exports = (sequelize, DataTypes) => {
  const GamePlayer = sequelize.define('GamePlayer', {
    coins: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    tableName: 'game_player',
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp',
  });
  return GamePlayer;
};
