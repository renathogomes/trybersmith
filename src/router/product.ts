import { Router } from 'express';
import productController from '../controller/product';

const routerProduct = Router();

routerProduct.post('/', productController.createProduct);
routerProduct.get('/', productController.getProduct);

export default routerProduct;