// crie usando JWT um token que deve ser gerado e retornado caso haja sucesso no login. No seu payload deve estar presente o id e username, adicione uma tipagem para que id seja number e username seja string
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type Payload = {
  id: number;
  username: string;
};

const tokenJWT = (payload: Payload): string => jwt.sign(payload, secret);

const verify = (token: string): Payload => jwt.verify(token, secret) as Payload;

export default { tokenJWT, verify };