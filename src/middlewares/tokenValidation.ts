import { RequestHandler } from 'express';
import tokenJWT from '../utils/tokenJWT';

const captureToken = (baererToken: string): string => baererToken.split(' ')[1];

const tokenValidation: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const token = captureToken(authorization);

  try {
    tokenJWT.verify(token);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default tokenValidation;