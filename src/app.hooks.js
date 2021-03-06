// Application hooks that run for every service
const hydrate = require('feathers-sequelize/hooks/hydrate');
function rawFalse(context) {
  if (!context.params.sequelize) context.params.sequelize = {};
  Object.assign(context.params.sequelize, { raw: false });
  return context;
}
module.exports = {
  before: {
    all: [rawFalse],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [hydrate()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
