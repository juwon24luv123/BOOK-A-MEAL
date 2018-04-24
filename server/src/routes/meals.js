import express from 'express';
import MealsController from '../controllers/meals';

const mealsRoute = express.Router();

mealsRoute.get('/', MealsController.getMeals);
mealsRoute.post('/', MealsController.postMeals);
mealsRoute.put('/', MealsController.putMeals);
mealsRoute.delete('/', MealsController.deleteMeals);

export default mealsRoute;
