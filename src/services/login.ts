// crie uma função com função service, para validar o login usando bcrypt e retornar o token JWT.
import bcrypt from 'bcryptjs';
import jwtToken from '../utils/tokenJWT';
import { Token } from '../types/Token';
import { UserLogin } from '../types/User';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';

const loginService = async (user: UserLogin): Promise<ServiceResponse<Token>> => {
  const { username, password } = user;

  if (!username || !password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }

  // busque se existe um usuário com o username informado, ou se o password está correto.
  const userFound = await UserModel.findOne({ where: { username } });
  if (!userFound || !bcrypt.compareSync(password, userFound.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  // crie um token JWT para o usuário usando username e id, sendo o id o payload do token.
  const token = jwtToken({ username, id: userFound.dataValues.id });

  return { status: 'SUCCESSFUL', data: { token } };
};

export default loginService;
