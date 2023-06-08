import express from "express";
import { getAll, getByid, createUser, updateUser, deleteUser} from "../controllers/users.postgresql.controller.js";
import { validationHandlerUserCreate, validationHandlerUserUpdate } from "../middlewares/index.js";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getByid);

router.post("/", [validationHandlerUserCreate], createUser);

router.patch("/:id", [validationHandlerUserUpdate], updateUser);

router.delete("/:id", deleteUser);

export default router;

