const express = require('express');
const router = express.Router();

const CategoriesController = require('../controllers/CategoriesController')


router
    .get('/', CategoriesController.index)
    .post('/', CategoriesController.create)
    .put('/:id', CategoriesController.update)
    .delete('/:id', CategoriesController.delete)

module.exports = router