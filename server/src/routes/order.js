import express from 'express';
import OrderController from '../controllers/order';
import ValidateOrder from '../middlewares/order';

const orderRoute = express.Router();

orderRoute.get('/', OrderController.getOrder);
orderRoute.post('/:id', ValidateOrder.createOrder, OrderController.createOrder);
orderRoute.put('/:id', OrderController.updateOrder);

export default orderRoute;
