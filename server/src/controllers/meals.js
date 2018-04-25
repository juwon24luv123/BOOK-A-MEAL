import mealsDB from '../.data/meals';

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
   * @method postMeal
   * @param {object} req
   * @param {object} res
   * @return {array} Returns a list of Meals
   */
  static postMeals(req, res) {
    if (res.statusCode !== 200) {
      res.status(404).send({ Message: 'someting went wrong, could not add meal' });
    } else {
      res.status(200).send({
        meals: req.body
      });
    }
  }
  /**
   * @method putMeal
   * @param {object} req
   * @param {oblect} res
   * @return {array}  Returns a list of Meals
   */
  static putMeals(req, res) {
    if (res.statusCode !== 200) {
      res.status(400).send({ Message: 'someting went wrong, could not update meal' });
    } else {
      const meals = mealsDB.filter((meal, index) => {
        if (meal.id === req.body.id) {
          mealsDB[index] = req.body;
          return res.send(mealsDB[index]);
        }
        return res.status(404).send({
          Error: `${req.body.title} Does not exist`
        });
      });
      res.send(meals);
    }
  }
  /**
   * @method deleteMeal
   * @param {object} req
   * @param {object} res
   * @return {array} Return a list of Meals
   */
  static deleteMeals(req, res) {
    if (res.statusCode !== 200) {
      res.status(400).send({ Message: 'someting went wrong, could not update meal' });
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
        data: meals
      });
    }
  }
}
export default Meals;
