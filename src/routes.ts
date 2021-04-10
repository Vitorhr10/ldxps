import express from 'express';
import SellersController from './controllers/SellersController';

const routes = express.Router();
const sellersControllers = new SellersController();

routes.get('/sellers', sellersControllers.index);
routes.post('/sellers', sellersControllers.create);

export default routes;