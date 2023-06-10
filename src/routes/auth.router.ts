import express from "express";
import { signIn, restrictedView } from "../controllers/auth.controller";
import  isAuth  from "../middlewares/isAuth.handler";

const router = express.Router();

router.post("/login", signIn);
router.get("/restricted", isAuth, restrictedView);

export default router;
