import express from 'express';
import MealsController from '../controllers/meals';
import ValidateMeals from '../middlewares/meal';

const mealsRoute = express.Router();

mealsRoute.get('/', MealsController.getMeals);
mealsRoute.post('/:id', ValidateMeals.createMeals, MealsController.createMeals);
mealsRoute.put('/:id', MealsController.updateMeal);
mealsRoute.delete('/:id', MealsController.deleteMeals);

export default mealsRoute;
