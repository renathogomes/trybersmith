import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productMock from '../../mocks/product.mock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Product } from '../../../src/types/Product';
import productService from '../../../src/services/product';
import productController from '../../../src/controller/product';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('should verify the controller when successfully creating a new product', async function () {
    req.body = productMock.ProductSuccesDB;

    const serviceResponse: ServiceResponse<Product> = {
      status: 'SUCCESSFUL',
      data: productMock.ProductSuccesCreated,
    };

    sinon.stub(productService, 'createProduct').resolves(serviceResponse);
    await productController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productMock.ProductSuccesCreated);
  });

});
