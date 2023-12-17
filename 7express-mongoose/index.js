require('dotenv').config();
const express = require('express');
const currenciesRoutes = require('./routes/currencies.routes');
const usersRoutes = require('./routes/users.routes');
const { verifyAuth } = require('./middlewares/verifyAuth');
const { validateUserSearch } = require('./middlewares/validateUserSearch');

const app = express();

// app.use(verifyAuth);

app.use('/currencies', currenciesRoutes);
app.use('/users', verifyAuth, validateUserSearch, usersRoutes);

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  console.log('Listening...');
});
