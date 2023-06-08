<<<<<<< HEAD
const express = require('express');
const httpStatus = require('http-status');
const path = require("path");

const router = express.Router();

const productsRouter = require('./products.route');
const usersRouter = require('./users.route');
const authRouter = require('./auth.route');

=======
import express from "express";
import httpStatus from "http-status";
import productsRouter from "./products.route.js";
import usersRouter from "./users.route.js";
import { login, restrictedView } from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/isAuth.handler.js";

const router = express.Router();

const BASE_URL = "/api/v1/";
>>>>>>> c0f4616 (pasando de js to ss)

router.get("/health", (_req, res) => {  
    res.status(httpStatus.OK).json({
      healht: "up",
      success: true,
      message: `Server working fine in enviroment: ${process.env.ENVIRONMENT}` ||  "Not set",
    });
  })
<<<<<<< HEAD
})
  .use(`${BASE_URL}auth`, authRouter)
=======
  .use(`${BASE_URL}login`, login)
  .use(`${BASE_URL}auth/confidential`, isAuth, restrictedView)
>>>>>>> c0f4616 (pasando de js to ss)
  .use(`${BASE_URL}products`, productsRouter)
  .use(`${BASE_URL}users`, usersRouter);

<<<<<<< HEAD
  if (process.env.ENVIRONMENT !== "production") {
    router.get(`/login`, (_req, res) => {
      res.sendFile(path.resolve("src/views/login.html"));
    });
    router.get(`/playground`, (_req, res) => {
      res.sendFile(path.resolve("src/views/playground.html"));
    });
  }
module.exports = router;
=======
export default router;
>>>>>>> c0f4616 (pasando de js to ss)
