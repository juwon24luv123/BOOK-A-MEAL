import orderDb from '../.data/order.json';
import mealDb from '../.data/meals.json';

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
    orderDb.forEach((order) => {
      for (let i = 0; i < order.meals.length; i += 1) {
        mealDb.forEach((meal) => {
          if (meal.id === order.meals[i]) {
            order.meals[i] = meal;
          }
        });
      }
    });
    res.status(200).send({
      success: true,
      orderDb
    });
  }
}

export default Order;
