import express from 'express';
import mealsRoute from './meals';

const apiRoutes = express.Router();

apiRoutes.use('/meals', mealsRoute);

export default apiRoutes;
