const express = require('express');

const app = express();

const { getCurrencies } = require('./controllers/currencies.controller');

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/currencies', getCurrencies);

app.get('/currencies/selected/:id?', (req, res) => {
  // http://localhost:3000/currencies/selected?id=123
  console.log('hello');
  res.send(req.query);
});

app.get('/users/:userId', (req, res) => {
  // http://localhost:3000/users/34
  res.send(req.params);
  console.log(req.query);
});

app.get('/*', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(3000, () => {
  console.log('Listening...');
});
