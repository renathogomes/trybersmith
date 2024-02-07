import { RequestHandler } from 'express';
import UserModel from '../database/models/user.model';

const orderUseralidate: RequestHandler = async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }
  if (typeof userId !== 'number') {
    return res
      .status(422).json({ message: '"userId" must be a number' });
  }
  const userExist = await UserModel.findOne({ where: { id: userId } });
  console.log(userExist);
  if (!userExist) {
    return res
      .status(404).json({ message: '"userId" not found' });
  }
  next();
};

export default orderUseralidate;