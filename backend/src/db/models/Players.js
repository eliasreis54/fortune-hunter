module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('Players', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nick: {
      type: DataTypes.STRING,
    },
    wins: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    defeats: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    tableName: 'Players',
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp',
  });
  return Players;
};
