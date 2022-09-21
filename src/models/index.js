'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL;

const sequelizeDB = new Sequelize(DATABASE_URL);
const People = require('./people')(sequelizeDB, DataTypes);
const Books = require('./books')(sequelizeDB, DataTypes);

module.exports = { sequelizeDB, People, Books };