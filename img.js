const express = require('express');
const router = express.Router();

const ImgController = require('../controllers/ImgController')


router
    .get('/', ImgController.index)
    .post('/', ImgController.create)
    .put('/:id', ImgController.update)
    .delete('/:id', ImgController.delete)

module.exports = router