"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_mongo_controller_1 = require("../controllers/products.mongo.controller");
const index_1 = require("../middlewares/index");
const router = express_1.default.Router();
router.get("/", products_mongo_controller_1.getAll);
router.get("/:id", products_mongo_controller_1.getByid);
router.post("/", [index_1.validationHandlerProductCreate], products_mongo_controller_1.createProduct);
router.patch("/:id", [index_1.validationHandlerProductUpdate], products_mongo_controller_1.updateProduct);
router.delete("/:id", products_mongo_controller_1.deleteProduct);
exports.default = router;
