import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel,
{ ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';

type Product = {
  id: number;
  name: string;
  price: string;
};

const createProduct = async (product: ProductInputtableTypes): 
Promise<ServiceResponse<Product>> => {
  const { dataValues: { id, name, price } } = await ProductModel.create(product);
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
