const express = require("express");
const usersController = require("../controllers/users.postgresql.controller");
const { validationHandler } = require("../middlewares/index");
const { createUserSchema, updateUserSchema } = require("../models/users.schema");

const router = express.Router();

router.get("/", usersController.getAll);

router.get("/:id", usersController.getByid);

router.post("/", [validationHandler(createUserSchema)] ,usersController.createUser);

router.patch("/:id", [validationHandler(updateUserSchema)], usersController.updateUser);

// router.delete("/:id", usersController.deleteProduct);

module.exports = router;

