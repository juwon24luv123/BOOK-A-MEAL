import express from 'express';
import MealsController from '../controllers/meals';

// const mealController = new mealController();
const mealsRoute = express.Router();

mealsRoute.get('/', MealsController.getMeals);
mealsRoute.post('/', MealsController.createMeals);
mealsRoute.put('/', MealsController.updateMeal);
mealsRoute.delete('/:id', MealsController.deleteMeals);

export default mealsRoute;
