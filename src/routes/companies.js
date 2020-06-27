const express = require('express');
const router = express.Router();

const CompaniesController = require('../controllers/CompaniesController')


router
    .get('/', CompaniesController.index)
    .post('/', CompaniesController.create)
    .put('/:id', CompaniesController.update)
    .delete('/:id', CompaniesController.delete)

module.exports = router