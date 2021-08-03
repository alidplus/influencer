// Initializes the `order_items` service on path `/order-items`
const { OrderItems } = require('./order_items.class');
const createModel = require('../../models/order_items.model');
const hooks = require('./order_items.hooks');
const docs = require('./order_items.docs');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    ...app.get('serviceCommonConfigs')
  };

  // Initialize our service with any options it requires
  let service = new OrderItems(options, app);
  service.docs = docs;
  app.use('/order-items', service);

  // Get our initialized service so that we can register hooks
  service = app.service('order-items');

  service.hooks(hooks);
};
