const users = require('./users/users.service.js');
const products = require('./products/products.service.js');
const orders = require('./orders/orders.service.js');
const merchants = require('./merchants/merchants.service.js');
const orderItems = require('./order_items/order_items.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(products);
  app.configure(orders);
  app.configure(merchants);
  app.configure(orderItems);
};
