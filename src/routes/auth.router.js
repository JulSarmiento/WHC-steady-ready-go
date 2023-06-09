import express from "express";
import { login, restrictedView } from "../controllers/auth.controller";
import { isAuth } from "../middlewares/isAuth.handler";

const router = express.Router();

router.post("/login", login);
router.get("/restricted", isAuth, restrictedView);

export default router;
