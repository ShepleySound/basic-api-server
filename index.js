'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL;

const sequelizeDB = new Sequelize(DATABASE_URL);

// Create associated tables and make sure
sequelizeDB.sync()
  .then(() => console.log('Successful Connection!'))
  .catch(err => console.error(err));