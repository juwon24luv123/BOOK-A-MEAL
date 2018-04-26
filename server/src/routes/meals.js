import express from 'express';
import MealsController from '../controllers/meals';

// const mealController = new mealController();
const mealsRoute = express.Router();

mealsRoute.get('/', MealsController.getMeals);
mealsRoute.post('/', MealsController.postMeals);
mealsRoute.put('/', MealsController.putMeal);
mealsRoute.delete('/', MealsController.deleteMeals);

export default mealsRoute;
