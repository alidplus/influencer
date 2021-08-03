'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.describeTable('merchants').then(attributes => {
      if ( !attributes.columnName ) {
        return queryInterface.addColumn('merchants', 'address', {
          type: Sequelize.STRING,
          allowNull: true
        });
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.describeTable('merchants').then(attributes => {
      if ( attributes.columnName ) {
        return queryInterface.removeColumn('merchants', 'address');
      }
    });
  }
};
