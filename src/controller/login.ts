// crie uma função chamada loginController que receba um request e um response, e retorne um status de acordo com os types de status http e os dados do usuário logado, e utilize a função service para validar o login.
import { Request, Response } from 'express';
import loginService from '../services/login';
import statusHTTP from '../utils/httpStatus';

const loginController = async (req: Request, res: Response): Promise<void> => {
  const login = await loginService(req.body);
  res.status(statusHTTP(login.status)).json(login.data);
};

export default loginController;