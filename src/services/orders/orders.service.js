// Initializes the `orders` service on path `/orders`
const { Orders } = require('./orders.class');
const createModel = require('../../models/orders.model');
const hooks = require('./orders.hooks');
const docs = require('./orders.docs');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    ...app.get('serviceCommonConfigs')
  };

  // Initialize our service with any options it requires
  let service = new Orders(options, app);
  service.docs = docs;
  app.use('/orders', service);

  // Get our initialized service so that we can register hooks
  service = app.service('orders');

  service.hooks(hooks);
};
