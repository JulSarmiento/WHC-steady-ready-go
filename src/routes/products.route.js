const express = require("express");
const productsController = require("../controllers/products.mongo.controller");
const validate = require("../middlewares/validate.model");
const {createProductSchema, updateProductSchema} = require("../models/product.schema");


const router = express.Router();

router.get("/", productsController.getAll);

router.get("/:id", productsController.getByid);

router.post("/", validate(createProductSchema), productsController.createProduct);

router.patch("/:id", validate(updateProductSchema), productsController.updateProduct);

router.delete("/:id", productsController.deleteProduct);

module.exports = router;

