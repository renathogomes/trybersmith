import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import OrderService from '../../../src/services/order';
import orderMock from '../../mocks/order.mock';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Should verify that all Orders are listed', async function() {
    sinon.stub(OrderModel, 'findAll').resolves(orderMock.allOrders);

    const serviceResponse = await OrderService.getAll();

    expect(serviceResponse.status).to.deep.equal('SUCCESSFUL')
  });
  it('Should verify that it is possible to successfully register an order', async function() {
    
    const parametersCreateOrder =  {userId: 1, id: 1};
    const buildOrder = OrderModel.build(parametersCreateOrder);
    sinon.stub(OrderModel, 'create').resolves(buildOrder);

    const serviceResponse = await OrderService.createOrder({userId:1, productIds:[1,2]})
    expect(serviceResponse.status).to.be.deep.equal('CREATED');

  })
  })