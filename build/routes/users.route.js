"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_postgresql_controller_1 = require("../controllers/users.postgresql.controller");
const index_1 = require("../middlewares/index");
const router = express_1.default.Router();
router.get("/", users_postgresql_controller_1.getAll);
router.get("/:id", users_postgresql_controller_1.getByid);
router.post("/", [index_1.validationHandlerUserCreate], users_postgresql_controller_1.createUser);
router.patch("/:id", [index_1.validationHandlerUserUpdate], users_postgresql_controller_1.updateUser);
router.delete("/:id", users_postgresql_controller_1.deleteUser);
exports.default = router;
