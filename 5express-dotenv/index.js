const express = require('express');
const currenciesRoutes = require('./routes/currencies.routes');
const usersRoutes = require('./routes/users.routes');

const app = express();

app.use('/currencies', currenciesRoutes);
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  console.log('Listening...');
});
