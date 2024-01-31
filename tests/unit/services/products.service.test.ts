import { expect } from 'chai';
import sinon from 'sinon';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('should verify the ability to create a new product', async function () {
    const parameters = productMock.ProductSuccesDB;
    const mockCreate = ProductModel.build(parameters);
    sinon.stub(ProductModel, 'create').resolves(mockCreate);

    const serviceResponse = await productService.createProduct(parameters);

    expect(serviceResponse.status).to.deep.equal('SUCCESSFUL');
  });

});
