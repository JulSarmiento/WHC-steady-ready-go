const express = require("express");
const productsController = require("../../controllers/products.controllers");
const productsMongoController = require("../../controllers/products.mongo.controller");
const validate = require("../middlewares/validate.model");
const {createProductSchema, updateProductSchema} = require("../../models/joi.schema");


const router = express.Router();

router.get("/", productsMongoController.getAll);

router.get("/:id", productsMongoController.getByid);

router.post("/", validate(createProductSchema), productsMongoController.createProduct);

router.patch("/:id", validate(updateProductSchema), productsController.updateProduct);

router.delete("/:id", productsMongoController.deleteProduct);

module.exports = router;

