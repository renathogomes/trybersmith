import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productModel from '../../../src/database/models/product.model';
import dataMock from '../../mocks/product.mock';
import app from '../../../src/app';


chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  // deve retornar um status 201 e o objeto criado
  it('should return status 201 and the created object', async function () {
    const product = productModel.build(dataMock.newProductMock);

    sinon.stub(productModel, 'create').resolves(product);

    const res = await chai.request(app).post('/products').send(dataMock.newProductMock);

    expect(res.status).to.be.equal(201);
  });

});
