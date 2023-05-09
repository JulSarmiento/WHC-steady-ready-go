const express = require("express");
const productsController = require("../controllers/products.mongo.controller");
const {validationHandlerProductCreate, validationHandlerProductUpdate} = require("../middlewares");


const router = express.Router();

router.get("/", productsController.getAll);

router.get("/:id", productsController.getByid);

router.post("/", [validationHandlerProductCreate], productsController.createProduct);

router.patch("/:id", [validationHandlerProductUpdate], productsController.updateProduct);

router.delete("/:id", productsController.deleteProduct);

module.exports = router;

