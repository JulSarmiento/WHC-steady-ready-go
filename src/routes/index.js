const express = require('express');
const httpStatus = require('http-status');

const router = express.Router();

const productsRouter = require('./products.route');
const usersRouter = require('./users.route');
const {login, restrictedView} = require('../controllers/auth.controller');
const {isAuth} = require('../middlewares/isAuth.handler');

const BASE_URL = '/api/v1/';

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).json({
    healht: "up",
    success: true,
    message: `Server working fine in enviroment: ${process.env.ENVIRONMENT}` || "Not set"
  })
})
  .use(`${BASE_URL}login`, login)
  .use(`${BASE_URL}auth/confidential`, isAuth, restrictedView)
  .use(`${BASE_URL}products`, productsRouter)
  .use(`${BASE_URL}users`, usersRouter)

module.exports = router;