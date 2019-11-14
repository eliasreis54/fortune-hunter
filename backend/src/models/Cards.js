module.exports = (sequelize, DataTypes) => {
  const Cards = sequelize.define('Cards', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    coust: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    income: DataTypes.INTEGER,
  });
  return Cards;
};
