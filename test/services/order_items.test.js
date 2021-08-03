const assert = require('assert');
const app = require('../../src/app');

describe('\'order_items\' service', () => {
  it('registered the service', () => {
    const service = app.service('order-items');

    assert.ok(service, 'Registered the service');
  });
});
