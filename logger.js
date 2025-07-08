// Logger middleware
exports.logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip;
  
  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
  
  // Add request time to track performance
  req.requestTime = Date.now();
  
  // Log response when finished
  res.on('finish', () => {
    const responseTime = Date.now() - req.requestTime;
    console.log(`[${timestamp}] ${method} ${url} - Status: ${res.statusCode} - Response Time: ${responseTime}ms`);
  });
  
  next();
};