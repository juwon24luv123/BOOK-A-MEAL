
const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  User.associate = (models) => {
    User.belongsToMany(models.Meal);
    User.belongsToMany(models.Menu);
    User.belongsToMany(models.Order);
  };
  return User;
};

export default user;
