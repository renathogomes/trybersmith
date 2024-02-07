import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productMock from '../../mocks/product.mock';
import productService from '../../../src/services/product';
import productsController from '../../../src/controller/product';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  // deve retornar o producto criado e um status 'CREATED'
  it('Should return the created product and a status CREATED', async function () {
    req.body = productMock.mockNewProduct;
    sinon.stub(productService, 'createProduct').resolves({ status: 'CREATED', data: productMock.mockNewProduct });

    await productsController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ status: 'CREATED', data: productMock.mockNewProduct });
  })
});
