import menuDb from '../.data/menu.json';


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
    res.status(200).send({
      menus: menuDb
    });
  }
}

export default Menu;
