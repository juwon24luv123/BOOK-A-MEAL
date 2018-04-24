import express from 'express';
import mealsRoute from './meals';
import menuRoute from './menu';

const apiRoutes = express.Router();

apiRoutes.use('/meals', mealsRoute);
apiRoutes.use('/menu', menuRoute);

export default apiRoutes;
