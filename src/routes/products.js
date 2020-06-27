const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/ProductsController')


router
    .get('/', ProductsController.index)
    .post('/', ProductsController.create)
    .put('/:id', ProductsController.update)
    .delete('/:id', ProductsController.delete)

module.exports = router