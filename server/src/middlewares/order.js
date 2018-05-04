
/**
 * @exports
 * @class Order
 * @classdesc uidiiod
 */
class Order {
  /**
       * @method createOrder
       * @param {object} req
       * @param {object} res
       * @param {object} next
       * @returns {array} Returns a lists of Meals
    */
  static createOrder(req, res, next) {
    if (!req.body.time || !req.body.quantity) {
      return res.status(400).send({ Message: 'all field are required' });
    }

    return next();
  }
}
export default Order;
