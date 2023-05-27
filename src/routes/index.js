const express = require('express');
const httpStatus = require('http-status');
const path = require("path");

const router = express.Router();

const productsRouter = require('./products.route');
const usersRouter = require('./users.route');
const authRouter = require('./auth.route');

const BASE_URL = '/api/v1/';

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).json({
    healht: "up",
    success: true,
    message: `Server working fine in enviroment: ${process.env.ENVIRONMENT}` || "Not set"
  })
})
  .use(`${BASE_URL}auth`, authRouter)
  .use(`${BASE_URL}products`, productsRouter)
  .use(`${BASE_URL}users`, usersRouter)

  if (process.env.ENVIRONMENT !== "production") {
    router.get(`/login`, (_req, res) => {
      res.sendFile(path.resolve("src/views/login.html"));
    });
    router.get(`/playground`, (_req, res) => {
      res.sendFile(path.resolve("src/views/playground.html"));
    });
  }
module.exports = router;