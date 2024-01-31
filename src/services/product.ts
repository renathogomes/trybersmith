import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

type Product = {
  id: number;
  name: string;
  price: string;
};

const createProduct = async (product: ProductInputtableTypes): 
Promise<ServiceResponse<Product>> => {
  const { dataValues: { id, name, price } } = await ProductModel.create(product);
  return { status: 'SUCCESSFUL', data: { id, name, price } }; // o product do type exige mais itens 
};

export default { createProduct };