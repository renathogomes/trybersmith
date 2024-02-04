import { Router } from 'express';
import productController from '../controller/product';
import middleware from '../middlewares/validation';

const routerProduct = Router();

routerProduct.post(
  '/',
  middleware.validateNameExist,
  middleware.validateName,
  middleware.validateNameLength,
  middleware.validatePriceExist,
  middleware.validatePrice,
  productController.createProduct,
);
routerProduct.get('/', productController.getProduct);

export default routerProduct;