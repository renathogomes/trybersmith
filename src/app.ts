import express from 'express';
import productsRoutes from './router/product';
import ordersRoutes from './router/order';
import loginRoutes from './router/login';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use('/login', loginRoutes);

export default app;
