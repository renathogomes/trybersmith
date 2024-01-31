import { Request, Response } from 'express';
import statusHTTP from '../utils/httpStatus';
import orderService from '../services/order';

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const orders = await orderService.getAll();
  res.status(statusHTTP(orders.status)).json(orders.data);
};

export default {
  getAll,
};