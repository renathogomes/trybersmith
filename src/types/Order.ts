export type Order = {
  id: number;
  userId: number;
  productId?: number;
  productIds?: number[];
};