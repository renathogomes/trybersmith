import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel,
{ ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { ProductOmit } from '../types/Product';

const createProduct = async (product: ProductInputtableTypes): 
Promise<ServiceResponse<ProductOmit>> => {
  const data = await ProductModel.create(product);
  const { dataValues: { id, name, price } } = data;
  return { status: 'CREATED', data: { id, name, price } };
};

const getProduct = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
};

export default {
  createProduct,
  getProduct,
};
