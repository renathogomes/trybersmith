import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import orderService from '../../../src/services/order';
import orderMock from '../../mocks/order.mock';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  // Deve retornar um array de objetos com os pedidos
  it('Should return an array of objects with orders', async function () {
    sinon.stub(OrderModel, 'findAll').resolves(orderMock.allOrders);
    const result = await orderService.getAll()
    
    expect(result.status).to.be.equal('SUCCESSFUL');

  });
});
