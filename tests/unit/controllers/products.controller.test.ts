import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import dataMock from '../../mocks/product.mock';
import productService from '../../../src/services/product';
import productsController from '../../../src/controller/product';
import productModel from '../../../src/database/models/product.model';

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

    expect(res.status).toBeCalledWith('CREATED');
    expect(res.json).toBeCalledWith(dataMock.mockNewProduct);
  });

  // Deve ser possivel listar todos os produtos
  it('Should be possible list all products', async function () {
    const list = dataMock.mockAllProduct.map((product) => productModel.build(product));
    sinon.stub(productModel, 'findAll').resolves(list);

    await productsController.getProduct(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith(list);
  });
});
