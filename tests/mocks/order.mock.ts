import orderModel from '../../src/database/models/order.model';

const newOrder = {
    id: 1,
    productIds: [1, 2],
}

const allOrders = [
  orderModel.build({
    id: 1,
    userId: 1,
    productIds: [1, 2],
  }),
];

const reqMock = {
    productIds: [1, 2],
    userId: 1,
};

const resMock = {
    userId: 1,
    productIds: [1, 2],
};

export default {
    newOrder,
    allOrders,
    reqMock,
    resMock,
};


