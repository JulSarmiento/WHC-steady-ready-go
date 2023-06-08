import express from "express";
import httpStatus from "http-status";
import productsRouter from "./products.route.js";
import usersRouter from "./users.route.js";
import { login, restrictedView } from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/isAuth.handler.js";

const router = express.Router();

const BASE_URL = "/api/v1/";

router.get("/health", (_req, res) => {  
    res.status(httpStatus.OK).json({
      healht: "up",
      success: true,
      message: `Server working fine in enviroment: ${process.env.ENVIRONMENT}` ||  "Not set",
    });
  })
  .use(`${BASE_URL}login`, login)
  .use(`${BASE_URL}auth/confidential`, isAuth, restrictedView)
  .use(`${BASE_URL}products`, productsRouter)
  .use(`${BASE_URL}users`, usersRouter);

export default router;
