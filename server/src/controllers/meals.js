import mealsDB from '../.data/meals';

/**
 * @exports
 * @class Meals
 * @classdesc uidiiod
 */
class Meals {
  /**
  //  * @method next
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
   *
   */
}

export default Meals;
