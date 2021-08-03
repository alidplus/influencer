// Initializes the `products` service on path `/products`
const { Products } = require('./products.class');
const createModel = require('../../models/products.model');
const hooks = require('./products.hooks');
const docs = require('./products.docs');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    ...app.get('serviceCommonConfigs')
  };

  // Initialize our service with any options it requires
  let service = new Products(options, app);
  service.docs = docs;
  app.use('/products', service);

  // Get our initialized service so that we can register hooks
  service = app.service('products');

  service.hooks(hooks);
};
