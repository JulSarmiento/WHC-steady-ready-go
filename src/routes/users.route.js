const express = require("express");
const usersController = require("../controllers/users.postgresql.controller");
const { validationHandlerUserCreate, validationHandlerUserUpdate } = require("../middlewares");


const router = express.Router();

router.get("/", usersController.getAll);

router.get("/:id", usersController.getByid);

router.post("/", [validationHandlerUserCreate] ,usersController.createUser);

router.patch("/:id", [validationHandlerUserUpdate], usersController.updateUser);

// router.delete("/:id", usersController.deleteProduct);

module.exports = router;

