const express = require('express');
const ProductController = require('../controller/products');
const router = express.Router();

//CREATE - METHOD: POST
router.post('/', ProductController.createNewProduct);

//READ - METHOD: GET
router.get('/', ProductController.getAllProducts);

//UPDATE - METHOD : PATCH
router.patch('/:id', ProductController.updateProduct);

//DELETE - METHOD : DELETE
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
