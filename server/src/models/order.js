
const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    mealId: DataTypes.INTERGER,
    quantity: DataTypes.INTERGER
  }, {});
  Order.associate = (models) => {
    Order.hasOne(models.User);
    Order.belongsToMany(models.Meal);
  };
  return Order;
};

export default order;
