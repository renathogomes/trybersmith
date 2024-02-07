import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model'
import productsMock from '../../mocks/product.mock'
import productsService from '../../../src/services/product';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  // Verifica se é possível criar um novo produto
  it('Should be able to create a product', async function() {
    const parameters = productsMock.newProductMock;
    const mockCreate = ProductModel.build(parameters);
    sinon.stub(ProductModel, 'create').resolves(mockCreate);

    const serviceResponse = await productsService.createProduct(parameters);

    expect(serviceResponse.status).to.deep.equal('CREATED');
  });
});
