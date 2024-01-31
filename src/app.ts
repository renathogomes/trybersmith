import express from 'express';
import productsRoutes from './router/product';
import ordersRoutes from './router/order';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

export default app;
