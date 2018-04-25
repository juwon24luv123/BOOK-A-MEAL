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
  /**
   * @method putOrder
   * @param {object} req
   * @param {object} res
   * @returns {array} return list of order
   */
  static putOrder(req, res) {
    if (res.statusCode !== 200) {
      res.status(400).send({ Message: 'someting went wrong, could not update meal' });
    } else {
      const orders = orderDb.filter((order, index) => {
        if (order.id === req.body.id) {
          order.id = req.body.id;
          order.tittle = req.body.tittle;
          order.description = req.body.description;
          order.price = req.body.price;
          order.imageUrl = req.body.imageUrl;
          orderDb[index] = order;
          return res.send(order);
        }
        return res.status(404).send({
          Error: `${req.body.title} Does not exist`
        });
      });
      res.send(orders);
    }
  }
}

export default Order;
