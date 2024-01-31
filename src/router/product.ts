import { Router } from 'express';
import productController from '../controller/product';

const routerProduct = Router();

routerProduct.post('/', productController.createProduct);

export default routerProduct;