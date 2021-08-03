// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    timestamps: true,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    models.users.hasMany(models.orders, { foreignKey: 'user_id' });
  };

  return users;
};
