import { literal } from 'sequelize';

import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

const getAll = async (): Promise<ServiceResponse<OrderSequelizeModel[]>> => {
  const order = await OrderModel.findAll({
    attributes: ['id', 'userId', [literal('JSON_ARRAYAGG(productIds.id)'), 'productIds']],
    include: [{ model: ProductModel, as: 'productIds', attributes: [] }], 
    group: ['Order.id'],
    raw: true,
  });  
  return { status: 'SUCCESSFUL', data: order };
};

export default {
  getAll,
};