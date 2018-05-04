
const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  Meal.associate = (models) => {
    Meal.hasOne(models.User);
    Meal.belongsToMany(models.Menu);
  };
  return Meal;
};

export default meal;
