import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productModel from '../../../src/database/models/product.model';
import dataMock from '../../mocks/product.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  // deve retornar um status 200 e uma lista de produtos
  it('should return status 200 and a list of products', async function () {
   const productsMock = productModel.bulkBuild(dataMock.mockAllProduct);
   sinon.stub(productModel, 'findAll').resolves(productsMock);

    const res = await chai.request(app).get('/products');

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
  });

});
