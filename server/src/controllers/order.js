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
    if (!req.body.id || !req.body.tittle || !req.body.quantity || !req.body.time) {
      return res.status(400).send({ Message: 'all field are required' });
    }
    return res.status(201).send({
      Message: 'Meal was added successfully',
      meals: req.body
    });
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
    for (i = 0; i < orderArray.length; i++) {
      if (orderArray[i].id === req.body.id) {
        orderArray[i].tittle = req.body.tittle;
        orderArray[i].time = req.body.time;
        orderArray[i].quantity = req.body.quantity;
        // orderArray[i] = req.body;
        return res.status(201).send({
          order: orderArray[i]
        });
      }
    }
    return res.status(404).json({
      Error: 'order Does not exist'
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
      res.status(201).send({
        order: orderDb
      });
    }
  }
}

export default Order;
