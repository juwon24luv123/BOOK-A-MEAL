import mealsDB from '../.data/meals.json';
// import expressValidator from 'express-validator';
// const { check, validationResult } = require('express-validator/check');

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
    if (res.statusCode !== 200) {
      res.status(404).send({ Message: 'Something went wrong, cannot process your request' });
    } else {
      res.status(200).send({
        meals: mealsDB
      });
    }
  }
  /**
   * @method postMeals
   * @param {object} req
   * @param {object} res
   * @return {array} Returns a list of Meals
   */
  static postMeals(req, res) {
    if (!req.body.tittle || !req.body.description || !req.body.price || !req.body.imageUrl || !req.body.id) {
      return res.status(400).send({ Message: 'all field are required' });
    }
    return res.status(201).send({
      Message: 'Meal was added successfully',
      meals: req.body
    });
  }
  /**
   * @method putMeals
   * @param {object} req
   * @param {oblect} res
   * @return {array}  Returns a list of Meals
   */
  static putMeal(req, res) {
    const orderArray = mealsDB;
    let i;
    for (i = 0; i < orderArray.length; i++) {
      if (orderArray[i].id === req.body.id) {
        orderArray[i].tittle = req.body.tittle;
        orderArray[i].description = req.body.description;
        orderArray[i].price = req.body.price;
        orderArray[i].imageUrl = req.body.imageUrl;
        orderArray[i] = req.body;
        console.log(req.body);

        res.status(201).send({
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
    if (!req.body.tittle || !req.body.description || !req.body.price || !req.body.imageUrl || !req.body.id) {
      res.status(204).send({ Message: '' });
    } else {
      const meals = mealsDB.filter((meal) => {
        let data = [];
        const parsedId = parseInt(req.query.id, 10);
        if (parsedId !== meal.id) {
          data = data.concat(meal);
          return data;
        }
      });
      res.send({
        Message: 'meal has been deleted',
        meal: meals
      });
    }
  }
}
export default Meals;
