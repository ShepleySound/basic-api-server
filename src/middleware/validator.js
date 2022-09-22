'use strict';

module.exports = (req, res, next) => {
  if (req.query.name) {
    next();
  } next('Name required when looking for a person.');
};