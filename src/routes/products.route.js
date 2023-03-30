const express = require('express');
const httpStatus = require('http-status');

const productsController = require('../../controllers/products.controllers');

const router = express.Router();

router.get('/', productsController.getAll);

router.get('/:id', productsController.getByid);

router.post('/', productsController.createProduct);

module.exports = router;