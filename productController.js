const ProductModel = require('../models/productModel');

// Get all products with filtering, pagination, and search
exports.getAllProducts = (req, res) => {
  try {
    const options = {
      category: req.query.category,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      search: req.query.search,
      page: req.query.page || 1,
      limit: req.query.limit || 10
    };
    
    const result = ProductModel.findAll(options);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single product by ID
exports.getProductById = (req, res) => {
  try {
    const product = ProductModel.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new product
exports.createProduct = (req, res) => {
  try {
    const newProduct = ProductModel.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a product
exports.updateProduct = (req, res) => {
  try {
    const updatedProduct = ProductModel.update(req.params.id, req.body);
    
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product
exports.deleteProduct = (req, res) => {
  try {
    const deleted = ProductModel.delete(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};