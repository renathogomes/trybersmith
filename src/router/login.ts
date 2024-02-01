import { Router } from 'express';
import loginController from '../controller/login';

const router = Router();

router.post('/', loginController);

export default router;