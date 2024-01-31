import { Router } from 'express';
import productController from '../controller/product';

const routerProduct = Router();

routerProduct.get('/', productController.createProduct);

export default routerProduct;