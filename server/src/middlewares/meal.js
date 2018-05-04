
/**
 * @exports
 * @class Meals
 * @classdesc uidiiod
 */
class Meals {
  /**
   * @method Validate
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {array} Returns a lists of Meals
  */
  static Validate(req, res, next) {
    if (!req.body.title || !req.body.description || !req.body.price ||
      !req.body.imageUrl) {
      return res.status(400).send({
        Message: 'all field are required'
      });
    }
    return next();
  }
}
export default Meals;
