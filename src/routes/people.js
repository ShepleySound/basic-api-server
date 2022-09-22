'use strict';

const express = require('express');
const router = express.Router();
const { People } = require('../models');

router.get('/people', async (req, res) => {
  const people = await People.findAll();
  res.status(200).json(people);
});

router.get('/people/:id', async (req, res) => {
  const person = await People.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(person);
});

router.post('/people', async (req, res) => {
  console.log('Request Body:', req.body);

  const newPerson = await People.create(req.body);
  res.status(201).send(newPerson);
});

router.put('/people/:id', async (req, res) => {
  const updated = await People.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${updated} row(s) updated successfully.`);
});

router.delete('/people/:id', async (req, res) => {
  const deleted = await People.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${deleted} row(s) deleted successfully.`);
});

module.exports = router;