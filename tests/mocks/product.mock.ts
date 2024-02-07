import ProductModel from "../../src/database/models/product.model";
import { Product } from "../../src/types/Product";

const newProductMock: Product = {
  id: 1,
  name: 'Garrafa de Singed',
  price: '30 peças de ouro',
  orderId: 4
};

const newProductCreated = {
  id: 1,
  name: 'Garrafa de Singed',
  price: '30 peças de ouro',
  orderId: 4
};

const AllProducts = [
  ProductModel.build(  {
    "id": 1,
    "name": "Excalibur",
    "price": "10 peças de ouro",
    "orderId": 1
  }),
]

export default {
  newProductMock,
  newProductCreated,
  AllProducts
}
