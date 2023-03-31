const express = require('express');
const productsController = require('../../controllers/products.controllers');

const router = express.Router();

router.get('/', productsController.getAll);

router.get('/:id', productsController.getByid);

router.post('/', productsController.createProduct);

router.patch('/:id', productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;