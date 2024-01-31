import { Router } from 'express';
import orderController from '../controller/order';

const router = Router();

router.get('/', orderController.getAll);

export default router;