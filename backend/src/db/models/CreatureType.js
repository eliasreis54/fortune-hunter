module.exports = (sequelize, DataTypes) => {
  const CreatureTypes = sequelize.define('CreatureTypes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'creature_types',
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp',
  });
  return CreatureTypes;
};
