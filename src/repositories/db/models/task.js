'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    number: DataTypes.INTEGER,
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};
