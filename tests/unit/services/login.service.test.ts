import { expect } from 'chai';
import sinon from 'sinon';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/services/login';
import UserModel from '../../../src/database/models';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Should verify that if the username is not passed, an error is returned.', async function() {
    const parameters = loginMock.LoginUsername;
    const serviceResponse = await loginService(parameters);
    expect(serviceResponse.status).to.deep.equal('INVALID_DATA');
    expect(serviceResponse.data).to.deep.equal( { message: '"username" and "password" are required' })
  });

  it('Should verify that if the password is not passed, an error is returned', async function() {
  
    const parameters = loginMock.loginPassword;
    const serviceResponse = await loginService(parameters);
    expect(serviceResponse.status).to.deep.equal('INVALID_DATA');
    expect(serviceResponse.data).to.deep.equal( { message: '"username" and "password" are required' })
  });

  it('Should verify that receiving a non-existent user returns an error', async function() {
    const parameters = loginMock.loginNotUser;
    sinon.stub(UserModel, 'Sequelize').resolves([]);
    const serviceResponse = await loginService(parameters);
    expect(serviceResponse.status).to.deep.equal('UNAUTHORIZED')
    expect(serviceResponse.data).to.deep.equal({ message: 'Username or password invalid' })
  });
});
