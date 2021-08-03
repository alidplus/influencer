// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const merchants = sequelizeClient.define('merchants', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  merchants.associate = function (models) {
    models.merchants.hasMany(models.products, { foreignKey: 'merchant_id' })
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return merchants;
};
