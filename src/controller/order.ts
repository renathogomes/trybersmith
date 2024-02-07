import { Request, Response } from 'express';
import statusHTTP from '../utils/httpStatus';
import orderService from '../services/order';

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const orders = await orderService.getAll();
  res.status(statusHTTP(orders.status)).json(orders.data);
};

const createOrder = async (req: Request, res: Response): Promise<void> => {
  const order = await orderService.createOrder(req.body);

  res.status(statusHTTP(order.status)).json(order.data);
};

export default {
  getAll,
  createOrder,
};