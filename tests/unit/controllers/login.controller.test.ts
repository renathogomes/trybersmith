import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginController from '../../../src/controller/login';


chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  // Testa se o status 400 é retornado quando o username não é passado.
  it('should return 400 when username is not passed', async function () {
    req.body = { password: 'XXXXXXXX' };
    await loginController(req, res);
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"username" and "password" are required' });
  });

  // Testa se o status 400 é retornado quando o password não é passado.
   it('should return 400 when password is not passed', async function () {
    req.body = { username: 'Renath0' };
    await loginController(req, res);
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"username" and "password" are required' });
}); 

});
