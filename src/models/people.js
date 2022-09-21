'use strict';

module.exports = (sequelize, DataTypes) => (
  sequelize.define('People', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  })
);