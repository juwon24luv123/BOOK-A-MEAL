import menuDb from '../.data/menu';

/**
 * @exports
 * @class Menu
 * @classdesc jajaja
 */
class Menu {
  /**
   * @method getMenu
   * @param {object} req
   * @param {object} res
   * @returns {array} Returns a lists of Meals
  */
  static postMenu(req, res) {
    if (res.statusCode !== 200) {
      res.status(404).send({ Message: 'Something went wrong, cannot process your request' });
    } else {
      res.status(200).send({
        menu: menuDb
      });
    }
  }
  /**
   * @method getMenu
   * @param {object} req
   * @param {object} res
   * @returns {array} Returns a lists of Meals
  */
  static getMenu(req, res) {
    if (res.statusCode !== 200) {
      res.status(404).send({ Message: 'Something went wrong, cannot process your request' });
    } else {
      res.status(200).send({
        menu: menuDb
      });
    }
  }
}

export default Menu;
