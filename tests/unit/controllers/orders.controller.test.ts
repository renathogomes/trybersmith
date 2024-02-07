import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import orderController from '../../../src/controller/order';
import orderService from '../../../src/services/order';
import orderMock from '../../mocks/order.mock';
import productService from '../../../src/services/product';
import OrderModel, {OrderSequelizeModel} from '../../../src/database/models/order.model';
import { ServiceResponse } from '../../../src/types/ServiceResponse';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  // Deve retornar um array de objetos com os pedidos
  it('Should return an array of objects with orders', async function () {
    const ServiceResponse: ServiceResponse<OrderSequelizeModel[]> = {
      status: 'SUCCESSFUL',
      data: orderMock.allOrders,
    };

    sinon.stub(orderService, 'getAll').resolves(ServiceResponse);
    await orderController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });
});
