const express = require('express');
const httpStatus = require('http-status');

const router = express.Router();

const productsRouter = require('./products.route');

const BASE_URL = '/api/v1/products';

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).json({
    healht: "up",
    success: true,
    message: `Server working fine in enviroment: ${process.env.ENVIRONMENT}` || "Not set"
  })
})
  .use(BASE_URL, productsRouter)

module.exports = router;