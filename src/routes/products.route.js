const express = require("express");
const productsController = require("../../controllers/products.controllers");
const validate = require("../middlewares/validate.model");
const producthSchema = require("../utils/schema");

const router = express.Router();

router.get("/", productsController.getAll);

router.get("/:id", productsController.getByid);

router.post("/", validate(producthSchema), productsController.createProduct);

router.patch("/:id", validate(producthSchema), productsController.updateProduct);

router.delete("/:id", productsController.deleteProduct);

module.exports = router;
