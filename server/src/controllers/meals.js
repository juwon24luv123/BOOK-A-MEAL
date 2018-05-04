// /* eslint-disable */
import mealsDB from '../.data/meals.json';

/**
 * @exports
 * @class Meals
 * @classdesc uidiiod
 */
class Meals {
  /**
   * @method getMeals
   * @param {object} req
   * @param {object} res
   * @returns {array} Returns a lists of Meals
  */
  static getMeals(req, res) {
    return res.status(200).send({
      success: true,
      message: 'Get all meals successfully',
      mealsDB
    });
  }
  /**
   * @method createMeals
   * @param {object} req
   * @param {object} res
   * @return {array} Returns a list of Meals
   */
  static createMeals(req, res) {
    // adding meal to the mealdb
    mealsDB.push({
      id: mealsDB[mealsDB.length - 1].id + 1,
      ...req.body
    });
    return res.status(201).send({
      Message: 'Meal was added successfully',
      meals: req.body
    });
  }
  /**
   * @method updateMeal
   * @param {object} req
   * @param {oblect} res
   * @return {array}  Returns a list of Meals
   */
  static updateMeal(req, res) {
    const orderArray = mealsDB;
    let i;
    for (i = 0; i < orderArray.length; i += 1) {
      if (orderArray[i].id === req.params.id) {
        orderArray[i] = {
          ...orderArray[i],
          ...req.body
        };
        return res.status(201).send({
          success: true,
          meals: orderArray[i]
        });
      }
    }
    return res.status(404).json({
      message: 'incorrect field supplied.',
      success: false
    });
  }
  /**
   * @method deleteMeal
   * @param {object} req
   * @param {object} res
   * @return {array} Return a list of Meals
   */
  static deleteMeals(req, res) {
    const mealId = parseInt(req.params.id, 10);
    mealsDB.forEach((meal, index) => {
      if (meal.id === mealId) {
        mealsDB.splice(index, 1);
        return res.status(200).send({
          success: true,
          Message: 'meal has been deleted.'
        });
      }
    });
    return res.status(404).send({
      success: false,
      message: `meal with ${mealId} not found`
    });
  }
}

export default Meals;
