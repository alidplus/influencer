// Initializes the `merchants` service on path `/merchants`
const { Merchants } = require('./merchants.class');
const createModel = require('../../models/merchants.model');
const hooks = require('./merchants.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    ...app.get('serviceCommonConfigs')
  };

  // Initialize our service with any options it requires
  app.use('/merchants', new Merchants(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('merchants');

  service.hooks(hooks);
};
