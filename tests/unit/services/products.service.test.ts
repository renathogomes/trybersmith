import { expect } from 'chai';
import sinon from 'sinon';
import productModel from '../../../src/database/models/product.model';
import dataMock from '../../mocks/product.mock';
import productService from '../../../src/services/product';

describe('ProductsService', function () {
  beforeEach(function () {
    sinon.restore();
  });
  // deve ser possivel criar um produto com sucesso
  it('should be able to create a product', async function () {
    const productMock = productModel.build(dataMock.mockNewProduct);
    sinon.stub(productModel, 'create').resolves(productMock);

    const newProductMock = await productService.createProduct(dataMock.mockNewProduct);

    expect(newProductMock.status).to.be.equal('CREATED');
    expect(newProductMock.data).to.be.deep.equal(dataMock.mockNewProduct);
  });
});

