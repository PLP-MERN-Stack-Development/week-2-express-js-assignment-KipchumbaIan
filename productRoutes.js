const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { validateProduct } = require('../middleware/validator');
const { authenticate } = require('../middleware/auth');

// Get all products (with filtering, pagination, search)
router.get('/', productController.getAllProducts);

// Get a single product by ID
router.get('/:id', productController.getProductById);

// Create a new product (requires authentication and validation)
router.post('/', authenticate, validateProduct, productController.createProduct);

// Update a product (requires authentication and validation)
router.put('/:id', authenticate, validateProduct, productController.updateProduct);

// Delete a product (requires authentication)
router.delete('/:id', authenticate, productController.deleteProduct);

module.exports = router;