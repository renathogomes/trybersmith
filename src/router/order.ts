import { Router } from 'express';
import orderController from '../controller/order';
import token from '../middlewares/tokenValidation';
import orderUserValidation from '../middlewares/orderUserValidation';
import orderProductValidation from '../middlewares/orderProductValidation';

const router = Router();

router.get('/', orderController.getAll);
router.post(
  '/', 
  token,
  orderUserValidation,
  orderProductValidation, 
  orderController.createOrder,
);

export default router;