module.exports = (sequelize, DataTypes) => {
  const CreatureTypes = sequelize.define('creature-types', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return CreatureTypes;
};
