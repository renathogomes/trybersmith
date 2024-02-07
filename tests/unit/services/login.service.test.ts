import { expect } from 'chai';
import sinon from 'sinon';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/services/login';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Should verify that if the username is not passed, an error is returned.', async function() {
    const parameters = loginMock.LoginUsername;
    const serviceResponse = await loginService(parameters);
    expect(serviceResponse.status).to.deep.equal('INVALID_DATA');
    expect(serviceResponse.data).to.deep.equal( { message: '"username" and "password" are required' })
  });
});
