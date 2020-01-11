module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('Players', {
    name: {
      type: datatypes.string,
      allowNull: false,
    },
    nick: {
      type: datatypes.string,
    },
    wins: {
      type: datatypes.integer,
      defaultValue: 0,
    },
    defeats: {
      type: datatypes.integer,
      defaultValue: 0,
    },
  });
  return Players;
};
