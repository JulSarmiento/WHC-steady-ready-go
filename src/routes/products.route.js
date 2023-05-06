const express = require("express");
const productsController = require("../controllers/products.mongo.controller");
const {validationHandler} = require("../middlewares/index");
const {createProductSchema, updateProductSchema} = require("../models/product.schema");


const router = express.Router();

router.get("/", productsController.getAll);

router.get("/:id", productsController.getByid);

router.post("/", validationHandler(createProductSchema), productsController.createProduct);

router.patch("/:id", validationHandler(updateProductSchema), productsController.updateProduct);

router.delete("/:id", productsController.deleteProduct);

module.exports = router;

