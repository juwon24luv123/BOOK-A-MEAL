import express from 'express';
import OrderController from '../controllers/order';

const orderRoute = express.Router();

orderRoute.get('/', OrderController.getOrder);
orderRoute.post('/', OrderController.createOrder);
orderRoute.put('/', OrderController.updateOrder);

export default orderRoute;
