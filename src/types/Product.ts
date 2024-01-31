export type Product = {
  id: number;
  name: string;
  price: string;
  orderId: number;
};

// cria um novo tipo de dado que é igual ao tipo Product, mas sem a propriedade orderId usando Omit
export type ProductOmit = Omit<Product, 'orderId'>;