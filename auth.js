// Simple authentication middleware
exports.authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  // In a real application, you would validate the API key against a database
  // For this assignment, we'll use a simple check
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized - Invalid API key' });
  }
  
  next();
};