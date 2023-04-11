const express = require("express");
const productsController = require("../../controllers/products.controllers");
const validate = require("../middlewares/validate.model");
const {createProductSchema, updateProductSchema} = require("../utils/schema");

const router = express.Router();

router.get("/", productsController.getAll);

router.get("/:id", productsController.getByid);

router.post("/", validate(createProductSchema), productsController.createProduct);

router.patch("/:id", validate(updateProductSchema), productsController.updateProductPatch);

router.delete("/:id", productsController.deleteProduct);



module.exports = router;
