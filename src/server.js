'use strict';

const express = require('express');
// Import functional middleware
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

// Import error handling files.
const notFound = require('./middleware/error-handlers/404');
const errorHandler = require('./middleware/error-handlers/500');

const app = express();

app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to the server!');
});

app.get('/person', validator, (req, res, next) => {
  res.status(200).send(req.query);
});

app.use('*', notFound);

app.use(errorHandler);

module.exports = { app };