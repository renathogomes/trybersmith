import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsMock from '../../mocks/product.mock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { ProductOmit } from '../../../src/types/Product';
import productsService from '../../../src/services/product';
import productsController from '../../../src/controller/product';
import { ProductSequelizeModel } from '../../../src/database/models/product.model';


chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;
  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  // Verifica se é possível criar um novo produto
  it('Should return the created product and a status CREATED', async function() {

    req.body = productsMock.newProductMock;

    const serviceResponse: ServiceResponse<ProductOmit> = {
      status: 'CREATED',
      data: productsMock.newProductCreated,
    }
    
    sinon.stub(productsService, 'createProduct').resolves(serviceResponse);
    await productsController.createProduct(req, res);
    
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productsMock.newProductCreated);
  })
  // Verifica se é possível listar todos os produtos
  it('Should be able to list all products', async function() {
    
    const serviceResponse: ServiceResponse<ProductSequelizeModel[]> = {
      status: 'SUCCESSFUL',
      data: productsMock.AllProducts,
    }
    
    sinon.stub(productsService, 'getProduct').resolves(serviceResponse);
    await productsController.getProduct(req, res);
    
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock.AllProducts);
  })
});
