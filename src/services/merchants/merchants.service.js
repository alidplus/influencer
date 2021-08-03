// Initializes the `merchants` service on path `/merchants`
const { Merchants } = require('./merchants.class');
const createModel = require('../../models/merchants.model');
const hooks = require('./merchants.hooks');
const docs = require('./merchants.docs');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    ...app.get('serviceCommonConfigs')
  };

  // Initialize our service with any options it requires
  let service = new Merchants(options, app);
  service.docs = docs;
  app.use('/merchants', service);

  // Get our initialized service so that we can register hooks
  service = app.service('merchants');

  service.hooks(hooks);
};
