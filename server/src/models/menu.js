
const menu = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    userid: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Menu.associate = (models) => {
    Menu.hasOne(models.User);
    Menu.belongsToMany(models.Meal);
  };
  return Menu;
};

export default menu;
