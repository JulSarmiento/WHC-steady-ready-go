const express = require('express');
const httpStatus = require('http-status');

const router = express.Router();

const procuctsRouter = require('./products.route');

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).json({
    healht: "up",
    success: true,
    message: `Server working fine in enviroment: ${process.env.ENVIROMENT}` || "Not set"
  })
})
  .use('/api/v1/products', procuctsRouter)

module.exports = router;