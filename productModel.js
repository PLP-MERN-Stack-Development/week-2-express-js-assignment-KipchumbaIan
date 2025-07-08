// In-memory database for products
let products = [
  {
    id: '1',
    name: 'Laptop',
    price: 999.99,
    description: 'High-performance laptop with 16GB RAM',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smartphone',
    price: 699.99,
    description: 'Latest smartphone with advanced camera',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Headphones',
    price: 199.99,
    description: 'Noise-cancelling wireless headphones',
    category: 'Audio'
  }
];

class ProductModel {
  // Get all products with optional filtering, pagination, and search
  static findAll(options = {}) {
    const { category, minPrice, maxPrice, search, page = 1, limit = 10 } = options;
    
    let filteredProducts = [...products];
    
    // Apply filters
    if (category) {
      filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    
    if (minPrice) {
      filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(minPrice));
    }
    
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(maxPrice));
    }
    
    // Apply search
    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchLower) || 
        p.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    return {
      data: paginatedProducts,
      pagination: {
        total: filteredProducts.length,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(filteredProducts.length / limit)
      }
    };
  }
  
  // Find product by ID
  static findById(id) {
    return products.find(p => p.id === id);
  }
  
  // Create a new product
  static create(productData) {
    const newProduct = {
      id: Date.now().toString(),
      ...productData
    };
    
    products.push(newProduct);
    return newProduct;
  }
  
  // Update a product
  static update(id, productData) {
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) return null;
    
    const updatedProduct = {
      ...products[index],
      ...productData
    };
    
    products[index] = updatedProduct;
    return updatedProduct;
  }
  
  // Delete a product
  static delete(id) {
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) return false;
    
    products.splice(index, 1);
    return true;
  }
}

module.exports = ProductModel;