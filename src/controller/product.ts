import { Request, Response } from 'express';
import productService from '../services/product';
import statusHTTP from '../utils/httpStatus';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const product = await productService.createProduct(req.body);
  res.status(statusHTTP(product.status)).json(product.data);
};

export default { createProduct };