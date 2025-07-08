// Product validation middleware
exports.validateProduct = (req, res, next) => {
  const { name, price, description, category } = req.body;
  const errors = [];
  
  // Validate required fields
  if (!name) errors.push('Product name is required');
  if (!price) errors.push('Product price is required');
  if (!description) errors.push('Product description is required');
  if (!category) errors.push('Product category is required');
  
  // Validate data types
  if (price && isNaN(parseFloat(price))) {
    errors.push('Price must be a number');
  }
  
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  
  next();
};