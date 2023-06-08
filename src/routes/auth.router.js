import express from "express";
import { login, restrictedView } from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/isAuth.handler.js";

const router = express.Router();

router.post("/login", login);
router.get("/restricted", isAuth, restrictedView);

export default router;
