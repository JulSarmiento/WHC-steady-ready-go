const express = require('express');
const httpStatus = require('http-status');

const router = express.Router();

const productsRouter = require('./products.route');
const usersRouter = require('./users.route');

const BASE_URL = '/api/v1/';

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).json({
    healht: "up",
    success: true,
    message: `Server working fine in enviroment: ${process.env.ENVIRONMENT}` || "Not set"
  })
})
  .use(`${BASE_URL}products`, productsRouter)
  .use(`${BASE_URL}users`, usersRouter)

module.exports = router;