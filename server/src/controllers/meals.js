/* eslint-disable */
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
    console.log(res.statusCode)
    if (res.statusCode !== 200) {
      return res.status(404).send({ Message: 'Something went wrong, cannot process your request' });
    } else {
      res.status(200).send({
        meals: mealsDB
      });
    }
  }
  /**
   * @method createMeals
   * @param {object} req
   * @param {object} res
   * @return {array} Returns a list of Meals
   */
  static createMeals(req, res) {
    if (!req.body.tittle || !req.body.description || !req.body.price ||
      !req.body.imageUrl || !req.body.id) {
      return res.status(400).send({ Message: 'all field are required' });
    }
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
      if (orderArray[i].id === req.body.id) {
        orderArray[i].tittle = req.body.tittle;
        orderArray[i].description = req.body.description;
        orderArray[i].price = req.body.price;
        orderArray[i].imageUrl = req.body.imageUrl;
        orderArray[i] = req.body;
        return res.status(201).send({
          meals: orderArray[i]
        });
      }
    }
    return res.status(404).json({
      success: 'incorrect field supplied.'
    });
  }
  /**
   * @method deleteMeal
   * @param {object} req
   * @param {object} res
   * @return {array} Return a list of Meals
   */
  static deleteMeals(req, res) {
    const mealId = parseInt(req.params.id);
    mealsDB.forEach((meal, index) => {
      if (meal.id === mealId) {
        mealsDB.splice(index, 1);
        return res.status(200).send({
          success: true,
          Message: 'meal has been deleted',
          meal: mealsDB

        });
      }
    }) 
    }
}
export default Meals;
