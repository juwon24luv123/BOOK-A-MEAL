import express from 'express';
import mealsRoute from './meals';
import menuRoute from './menu';
import orderRoute from './order';

const apiRoutes = express.Router();

apiRoutes.use('/meals', mealsRoute);
apiRoutes.use('/menu', menuRoute);
apiRoutes.use('/order', orderRoute);

export default apiRoutes;
