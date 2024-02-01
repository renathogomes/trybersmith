// crie usando JWT um token que deve ser gerado e retornado caso haja sucesso no login. No seu payload deve estar presente o id e username, adicione uma tipagem para que id seja number e username seja string
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

type Payload = {
  id: number;
  username: string;
};

export default function tokenJWT(payload: Payload): string {
  return jwt.sign(payload, secret as string, { expiresIn: '1h' });
}
