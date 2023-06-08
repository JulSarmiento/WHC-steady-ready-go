import express from "express";
import productsController from "../controllers/products.mongo.controller.js";
import { validationHandlerProductCreate, validationHandlerProductUpdate } from "../middlewares/index.js";


const router = express.Router();

router.get("/", productsController.getAll);

router.get("/:id", productsController.getByid);

router.post("/", [validationHandlerProductCreate], productsController.createProduct);

router.patch("/:id", [validationHandlerProductUpdate], productsController.updateProduct);

router.delete("/:id", productsController.deleteProduct);

export default router;

