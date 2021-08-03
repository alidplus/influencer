// Initializes the `users` service on path `/users`
const { Users } = require('./users.class');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');
const docs = require('./users.docs');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    ...app.get('serviceCommonConfigs')
  };

  // Initialize our service with any options it requires
  let service = new Users(options, app);
  service.docs = docs;
  app.use('/users', service);

  // Get our initialized service so that we can register hooks
  service = app.service('users');
  service.hooks(hooks);
};
