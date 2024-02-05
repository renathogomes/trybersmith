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
    const list = dataMock.mockAllProduct.map((product) => productModel.build(product));
    sinon.stub(productModel, 'findAll').resolves(list);
    const response = await chai.request(app).get('/products');

    expect(response.status).to.be.equal(200);
  });

});
