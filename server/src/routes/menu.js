import express from 'express';
import MenuController from '../controllers/menu';
import ValidateMenu from '../middlewares/menu';

const menuRoute = express.Router();

menuRoute.post('/:id', ValidateMenu.Validate, MenuController.createMenu);
menuRoute.get('/', MenuController.getMenu);


export default menuRoute;
