import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productController from '../../../src/controller/product';
import productService from '../../../src/services/product';
import statusHTTP from '../../../src/utils/httpStatus';
import productMock from '../../mocks/product.mock';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

   it('should create a product successfully', async function () {
    req.body = productMock.ProductSuccesCreated;

    const createProductStub = sinon.stub(productService, 'createProduct').resolves({
      status: 'CREATED',
      data: productMock.ProductSuccesDB,
    });

    await productController.createProduct(req, res);

    expect(res.status).to.be.calledWith(statusHTTP('CREATED'));
    expect(res.json).to.be.calledWith(productMock.ProductSuccesDB);
    expect(createProductStub).to.be.calledWith(productMock.ProductSuccesCreated);
  });

});
