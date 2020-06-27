const express = require('express');
const router = express.Router();

const OrdersController = require('../controllers/OrdersController')


router
    .get('/', OrdersController.index)
    .post('/', OrdersController.create)
    .put('/:id', OrdersController.update)
    .delete('/:id', OrdersController.delete)

module.exports = router