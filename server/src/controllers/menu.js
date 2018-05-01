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
    if (!req.body.tittle || !req.body.description || !req.body.price ||
      !req.body.imageUrl || !req.body.id) {
      return res.status(404).send({ Message: 'Something went wrong, all fields are required' });
    } return res.status(201).send({
      Message: 'Meal was added successfully',
      // menu: (req.body)
      menu: [...menuDb, (req.body)]
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
      menu: menuDb
    });
  }
}

export default Menu;
