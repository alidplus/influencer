// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const orderItems = sequelizeClient.define('order_items', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  orderItems.associate = function (models) {
    models.orders.belongsToMany(models.products, { through: models.order_items,  foreignKey: 'order_id' })
    models.products.belongsToMany(models.orders, { through: models.order_items,  foreignKey: 'product_id' })
  };

  return orderItems;
};
