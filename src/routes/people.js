'use strict';

const express = require('express');
const router = express.Router();
const { People } = require('../models');

router.get('/people', async (req, res) => {
  const people = await People.findAll();
  await res.status(200).json(people);
});

router.post('/people', async (req, res) => {
  console.log('Request Body:', req.body);

  const newPerson = await People.create(req.body);
  await res.status(201).send(newPerson);
});

module.exports = router;