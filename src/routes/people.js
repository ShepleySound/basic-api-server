'use strict';

const express = require('express');
const router = express.Router();

router.get('/people', (req, res) => {
  res.status(200).json();
});

router.post('/people', (req, res) => {
  res.status(201).send('posted');
});