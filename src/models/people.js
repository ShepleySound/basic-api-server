'use strict';

module.exports = (sequelize, DataTypes) => (
  sequelize.define('People', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  })
);