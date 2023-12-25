require('dotenv').config();
const express = require('express');
const currenciesRoutes = require('./routes/currencies.routes');
const usersRoutes = require('./routes/users.routes');
const blogsRoutes = require('./routes/blogs.routes');
const { verifyAuth } = require('./middlewares/verifyAuth');
const { validateUserSearch } = require('./middlewares/validateUserSearch');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(verifyAuth);

app.use('/currencies', currenciesRoutes);
app.use('/users', verifyAuth, validateUserSearch, usersRoutes);
app.use('/blogs', blogsRoutes);

app.get('/', (req, res) => {
  console.log('test...');
  res.send('hello');
});

const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('db connection success');
    app.listen(3000, () => {
      console.log('Listening...');
    });
  })
  .catch(() => {
    console.log('db connection failed');
  });
