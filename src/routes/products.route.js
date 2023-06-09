import express from "express";
import {
  getAll,
  getByid,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.mongo.controller";
import { validationHandlerProductCreate, validationHandlerProductUpdate } from "../middlewares/index";


const router = express.Router();

router.get("/", getAll);

router.get("/:id", getByid);

router.post("/", [validationHandlerProductCreate], createProduct);

router.patch("/:id", [validationHandlerProductUpdate], updateProduct);

router.delete("/:id", deleteProduct);

export default router;

