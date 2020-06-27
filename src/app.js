const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routeUsers = require('./routes/users');
const routeCategories = require('./routes/categories');
const routeCompanies = require('./routes/companies');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Acces-Control-Allow-Origin', '*');
  res.header(
    'Acces-Control-Allow-Header',
    'Origin, xRequested-With, Content-Type, Accept, Authorizaztion'
    );

    if (req.method === 'OPTIONS') {
      res.header('Acces-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).send({});
    }

    next();
});

app.use('/users', routeUsers);
app.use('/categories', routeCategories);
app.use('/companies', routeCompanies);

app.use((req, res, next) => {
  const err = new Error('Não encontrado');
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      message: error.message
    }
  });
});

module.exports = app;