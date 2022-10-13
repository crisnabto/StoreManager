const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.listProducts);

router.get('/:id', productsController.getProductById);

router.post('/', productsController.setNewProduct);

module.exports = {
  router,
};