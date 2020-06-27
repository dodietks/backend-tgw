
const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController')


router
    .get('/', UserController.index)
    .post('/', UserController.create)
    .put('/:id', UserController.update)
    .delete('/:id', UserController.delete)

module.exports = router