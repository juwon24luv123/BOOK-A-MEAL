import orderDb from '../.data/order.json';

/**
 * @exports
 * @class Order
 * @classdesc ositu
 */
class Order {
  /**
   * @method createOrder
   * @param {object} req
   * @param {object} res
   * @returns {array} return list of order
   */
  static createOrder(req, res) {
    // adding meal to the mealdb
    orderDb.push({
      id: orderDb[orderDb.length - 1].id + 1,
      ...req.body
    });
    return res.status(201).send({
      Message: 'order was added successfully',
      meals: req.body
    });
  }
  /**
   * @method updateOrder
   * @param {object} req
   * @param {object} res
   * @returns {array} return list of order
   */
  static updateOrder(req, res) {
    const orderArray = orderDb;
    let i;
    for (i = 0; i < orderArray.length; i += 1) {
      if (parseInt(orderArray[i].id, 10) === parseInt(req.params.id, 10)) {
        orderArray[i] = {
          ...orderArray[i],
          ...req.body
        };
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
