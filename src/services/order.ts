import { literal } from 'sequelize';

import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Order } from '../types/Order';

const getAll = async (): Promise<ServiceResponse<OrderSequelizeModel[]>> => {
  const order = await OrderModel.findAll({
    attributes: ['id', 'userId', [literal('JSON_ARRAYAGG(productIds.id)'), 'productIds']],
    include: [{ model: ProductModel, as: 'productIds', attributes: [] }], 
    group: ['Order.id'],
    raw: true,
  });  
  return { status: 'SUCCESSFUL', data: order };
};

// Crie uma função para criar um pedido
const createOrder = async ({ userId, productIds }: Omit<Order, 'id'>):
Promise<ServiceResponse<Omit<Order, 'id'>>> => {
  try {
    const extractData = await OrderModel.create({ userId });
    const id = extractData.getDataValue('id');

    productIds?.forEach(async (productId) => {
      await ProductModel.update({ orderId: id }, { where: { id: productId } });
    });
    return { status: 'CREATED', data: { userId, productIds } };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: 'Error' } };
  }
};

export default {
  getAll,
  createOrder,
};
