import menuDb from '../.data/menu.json';
import mealDb from '../.data/meals.json';


/**
 * @exports
 * @class Menu
 * @classdesc jajaja
 */
class Menu {
  /**
   * @method createMenu
   * @param {object} req
   * @param {object} res
   * @returns {array} Returns a lists of Meal
  */
  static createMenu(req, res) {
  // adding meal to the mealdb
    menuDb.push({
      id: menuDb[menuDb.length - 1].id + 1,
      ...req.body
    });
    return res.status(201).send({
      Message: 'menu was added successfully',
      menu: req.body
    });
  }
  /**
   * @method getMenu
   * @param {object} req
   * @param {object} res
   * @returns {array} Returns a lists of Meals
  */
  static getMenu(req, res) {
    // console.log(mealDb);
    menuDb.forEach((menu) => {
      for (let i = 0; i < menu.meals.length; i += 1) {
        mealDb.forEach((meal) => {
          if (meal.id === menu.meals[i]) {
            menu.meals[i] = meal;
          }
        });
      }
    });
    res.status(200).send({
      success: true,
      menuDb
    });
  }
}

export default Menu;
