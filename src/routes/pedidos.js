const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    message: 'GET Pedidos'
  });
});

router.get('/:id_order', (req, res, next) => {
  const id = req.params.id_order

  if (id === 'especial') {
    res.status(200).send({
      message: 'Dentro do if',
      id: id
    });
  } else {
    res.status(200).send({
      message: 'Dentro do else'
    })
  }
  res.status(200).send({
    message: 'GET Pedidos + ID'
  });
});

router.post('/', (req, res, next) => {
  const order = {
    id_product: req.body.id_product,
    quantity: req.body.quantity
  }
  res.status(201).send({
    message: 'POST Pedidos',
    orderCreated: order
  });
});

router.patch('/', (req, res, next) => {
  res.status(201).send({
    message: 'PATCH Pedidos'
  });
});

router.delete('/', (req, res, next) => {
  res.status(201).send({
    message: 'DELETE Pedidos'
  });
});

module.exports = router;
