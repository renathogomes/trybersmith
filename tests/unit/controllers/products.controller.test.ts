import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import dataMock from '../../mocks/product.mock';
import productService from '../../../src/services/product';
import productsController from '../../../src/controller/product';
import productModel, { ProductSequelizeModel } from '../../../src/database/models/product.model';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  // Deve ser possivel criar um produto com sucesso
  it('Should be possible create a product', async function () {
    req.body = dataMock.mockNewProduct;
    sinon.stub(productService, 'createProduct').resolves({
      status: 'CREATED',
      data: dataMock.mockNewProduct,
    });

    await productsController.createProduct(req, res);

    expect(res.status).toBeCalledWith(201);
    expect(res.json).toBeCalledWith({
      status: 'CREATED',
      data: dataMock.mockNewProduct,
    });
  });
});
