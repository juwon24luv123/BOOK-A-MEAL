
/**
 * @exports
 * @class Menu
 * @classdesc uidiiod
 */
class Menu {
  /**
     * @method createMeals
     * @param {object} req
     * @param {object} res
     * @param {object} next
     * @returns {array} Returns a lists of Meals
    */
  static createMenu(req, res, next) {
    if (!req.body.title || !req.body.description || !req.body.price ||
        !req.body.imageUrl) {
      return res.status(404).send({ Message: 'Something went wrong, all fields are required' });
    }

    return next();
  }
}
export default Menu;

