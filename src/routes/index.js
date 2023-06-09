import express from "express";
import httpStatus from "http-status";

import productsRouter from "./products.route";
import usersRouter from "./users.route";

import { login, restrictedView } from "../controllers/auth.controller";
import { isAuth } from "../middlewares/isAuth.handler";

const router = express.Router();

const BASE_URL = "/api/v1/";

router.get("/health", (_req, res) => {
  res.status(httpStatus.OK).json({
    healht: "up",
    success: true,
    message:
      `Server working fine in enviroment: ${process.env.ENVIRONMENT}` ||
      "Not set",
  });
});

router.post(`${BASE_URL}login`, login);
router.get(`${BASE_URL}auth/confidential`, isAuth, restrictedView);
router.use(`${BASE_URL}products`, productsRouter);
router.use(`${BASE_URL}users`, usersRouter);

export default router;
