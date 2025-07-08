# Products API

A RESTful API for managing products built with Express.js.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`
4. Start the server: `npm start`

## API Endpoints

### Get all products
- **URL**: `/api/products`
- **Method**: GET
- **Query Parameters**:
  - `category`: Filter by category
  - `minPrice`: Filter by minimum price
  - `maxPrice`: Filter by maximum price
  - `search`: Search in name and description
  - `page`: Page number for pagination (default: 1)
  - `limit`: Number of items per page (default: 10)
- **Response**: List of products with pagination info

**Example Request**: