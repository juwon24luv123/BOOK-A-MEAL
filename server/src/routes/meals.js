import express from 'express';
import MealsController from '../controllers/meals';

const mealsRoute = express.Router();

mealsRoute.get('/', MealsController.getMeals);
mealsRoute.post('/', MealsController.postMeals);

export default mealsRoute;
