import { Request, Response, NextFunction } from 'express';
import { ProductInputtableTypes } from '../database/models/product.model';

// faz validação se do request, existe um nome, se não existir, retorna status 400, com a mensagem '"name" is required'
const validateNameExist = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body as ProductInputtableTypes;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

// faz validação do nome vindo do request, se não for string, retorna status 422 com a mensagem'"name" must be a string'
const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body as ProductInputtableTypes;
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  next();
};

// faz validação se o campo "name" é uma string com mais de 2 caracteres
const validateNameLength = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body as ProductInputtableTypes;
  if (name.length <= 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

// Será validado que o campo "price" é obrigatório
const validatePriceExist = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body as ProductInputtableTypes;
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }
  next();
};

// Será validado que o campo "price" tem o tipo string
const validatePrice = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body as ProductInputtableTypes;
  if (typeof price !== 'number') {
    return res.status(422).json({ message: '"price" must be a number' });
  }
  next();
};

// Será validado que o campo "price" é uma string com mais de 2 caracteres
const validatePriceLength = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body as ProductInputtableTypes;
  if (price.length <= 2 || price.length >= 6) {
    return res.status(422)
      .json({ message: '"price" length must be between 2 and 6 characters long' });
  }
  next();
};

export default {
  validateNameExist,
  validateName,
  validateNameLength,
  validatePriceExist,
  validatePrice,
  validatePriceLength,
};
