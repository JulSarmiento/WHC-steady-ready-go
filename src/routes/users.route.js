const express = require("express");
const usersController = require("../controllers/users.postgresql.controller");
// const {validationHandler} = require("../middlewares/index");

const router = express.Router();

router.get("/", usersController.getAll);

// router.get("/:id", usersController.getByid);

router.post("/", usersController.createUser);

// router.patch("/:id", validationHandler(updateProductSchema), usersController.updateProduct);

// router.delete("/:id", usersController.deleteProduct);

module.exports = router;

