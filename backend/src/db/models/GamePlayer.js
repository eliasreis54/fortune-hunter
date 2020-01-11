module.exports = (sequelize, DataTypes) => {
  const GamePlayer = sequelize.define('game-player', {
    coins: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
  return GamePlayer;
};
