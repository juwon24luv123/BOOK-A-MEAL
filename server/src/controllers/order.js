import orderDb from '../.data/order';

/**
 * @exports
 * @class Order
 * @classdesc ositu
 */
class Order {
  /**
   * @method postOrder
   * @param {object} req
   * @param {object} res
   * @returns {array} return list of order
   */
  static postOrder(req, res) {
    if (res.statusCode !== 200) {
      res.status(500).send({ Message: 'Something went wrong, cannot process your request' });
    } else {
      res.status(200).send({
        order: orderDb
      });
    }
  }
}

export default Order;
