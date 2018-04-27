import orderDb from '../.data/order.json';

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
    const orderArray = orderDb;
    let i;
    for (i = 0; i < orderArray.length; i += 1) {
      if (orderArray[i].id === req.body.id) {
        orderArray[i].tittle = req.body.tittle;
        orderArray[i].description = req.body.description;
        orderArray[i].price = req.body.price;
        orderArray[i].imageUrl = req.body.imageUrl;
        orderArray[i] = req.body;
        console.log(req.body);
        res.status(201).send({
          order: orderArray[i]
        });
      }
    }
    return res.status(404).json({
      Error: `${req.body.id} order id Does not exist`
    });
  }
  /**
 * @method getOrder
 * @param {object} req
 * @param {object} res
 * @returns {array} retutn all list order
 */
  static getOrder(req, res) {
    if (res.statusCode !== 200) {
      res.status(404).send({ Message: 'Something went wrong, cant get all the orders' });
    } else {
      res.status(200).send({
        order: orderDb
      });
    }
  }
}

export default Order;
