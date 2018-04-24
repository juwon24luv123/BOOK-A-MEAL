import express from 'express';
import MenuController from '../controllers/menu';

const menuRoute = express.Router();

menuRoute.post('/', MenuController.postMenu);
menuRoute.get('/', MenuController.getMenu);


export default menuRoute;
