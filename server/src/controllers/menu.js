import menuDb from '../.data/menu';

/**
 * @exports
 * @class Menu
 * @classdesc jajaja
 */
class Menu {
  /**
   * @method postMenu
   * @param {object} req
   * @param {object} res
   * @returns {array} Returns a lists of Meals
  */
  static postMenu(req, res) {
    if (!req.body.tittle || !req.body.description || !req.body.price ||
      !req.body.imageUrl || !req.body.id) {
      return res.status(404).send({ Message: 'Something went wrong, all fields are required' });
    } return res.status(201).send({
      Message: 'Meal was added successfully',
      menu: [menuDb].concat(req.body)
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
