'use strict';

const { sequelizeDB, People, Books } = require('./src/models');
const { app } = require('./src/server');
const PORT = process.env.PORT || 3002;
require('dotenv').config();

// Create associated tables and make sure
sequelizeDB
  .sync()
  .then(() => console.log('Successful Connection!'))
  .catch(err => console.error(err.message));

app.listen(PORT, () => {
  console.log(`Server started. Listening on port ${PORT}`);
});
