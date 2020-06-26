const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    message: 'GET Produtos'
  });
});

router.get('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto

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
    message: 'GET Produtos + ID'
  });
});

router.post('/', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    conn.query(
      'INSERT INTO produtos (name, price, description, is_active, quantity_avaible) VALUES (?,?,?,?,?)',
      [req.body.name, req.body.price, req.body.description, req.body.is_active, req.body.quantity_avaible],
      (error, result, field) => {
        conn.release();
        if (error) {
          return res.status(500).send({
            error: error,
            response: null
          });
        }
        res.status(201).send({
          message: 'Produto inserido com sucesso',
          id_produto: result.insertId
        });
      }
    )

  });
});

router.patch('/', (req, res, next) => {
  res.status(201).send({
    message: 'PATCH Produtos'
  });
});

router.delete('/', (req, res, next) => {
  res.status(201).send({
    message: 'DELETE Produtos'
  });
});

module.exports = router;
