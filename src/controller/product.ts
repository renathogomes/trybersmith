import { Request, Response } from 'express';
import productService from '../services/product';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const product = await productService.createProduct(req.body);
  res.status(201).json(product.data);
};

export default { createProduct };