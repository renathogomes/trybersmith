import chai, { expect } from 'chai';
import sinon from 'sinon';
import productModel from '../../../src/database/models/product.model';
import dataMock from '../../mocks/product.mock';
import productService from '../../../src/services/product';

describe('ProductsService', function () {
  beforeEach(function () {
    sinon.restore();
  });

  // Deve ser possivel criar um produto com sucesso
  it('should be able to create a product successfully', async function () {
    const newProduct  = productModel.build(dataMock.mockNewProduct);
    sinon.stub(productModel, 'create').resolves(newProduct);

    const product = await productService.createProduct(dataMock.mockNewProduct);
    
    expect(product).to.be.deep.equal(newProduct);
  });
});

