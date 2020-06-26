const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaProdutos = require('./src/routes/produtos');
const rotaPedidos = require('./src/routes/pedidos');

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

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

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