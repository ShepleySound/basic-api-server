'use strict';

const { sequelizeDB, People, Books } = require('./src/models/people');
// Create associated tables and make sure
sequelizeDB.sync()
  .then(() => console.log('Successful Connection!'))
  .catch(err => console.error(err));