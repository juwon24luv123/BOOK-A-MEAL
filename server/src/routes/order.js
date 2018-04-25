import express from 'express';
import OrderController from '../controllers/order';

const orderRoute = express.Router();

// orderRoute.get('/', OrderController.getOrder);
orderRoute.post('/', OrderController.postOrder);
orderRoute.put('/', OrderController.putOrder);

export default orderRoute;
