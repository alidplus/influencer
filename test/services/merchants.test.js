const assert = require('assert');
const app = require('../../src/app');

describe('\'merchants\' service', () => {
  it('registered the service', () => {
    const service = app.service('merchants');

    assert.ok(service, 'Registered the service');
  });
});
