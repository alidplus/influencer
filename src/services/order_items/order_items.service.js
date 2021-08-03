// Initializes the `order_items` service on path `/order-items`
const { OrderItems } = require('./order_items.class');
const createModel = require('../../models/order_items.model');
const hooks = require('./order_items.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    ...app.get('serviceCommonConfigs')
  };

  // Initialize our service with any options it requires
  app.use('/order-items', new OrderItems(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('order-items');

  service.hooks(hooks);
};
