import { Request, Response } from 'express';
import productService from '../services/product';
import statusHTTP from '../utils/httpStatus';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const product = await productService.createProduct(req.body);
  res.status(statusHTTP(product.status)).json(product.data);
};

const getProduct = async (_req: Request, res: Response): Promise<void> => {
  const products = await productService.getProduct();
  res.status(statusHTTP(products.status)).json(products.data);
};

export default {
  createProduct,
  getProduct,
};