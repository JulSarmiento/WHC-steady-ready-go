"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_mongo_controller_js_1 = __importDefault(require("../controllers/products.mongo.controller.js"));
const index_js_1 = require("../middlewares/index.js");
const router = express_1.default.Router();
router.get("/", products_mongo_controller_js_1.default.getAll);
router.get("/:id", products_mongo_controller_js_1.default.getByid);
router.post("/", [index_js_1.validationHandlerProductCreate], products_mongo_controller_js_1.default.createProduct);
router.patch("/:id", [index_js_1.validationHandlerProductUpdate], products_mongo_controller_js_1.default.updateProduct);
router.delete("/:id", products_mongo_controller_js_1.default.deleteProduct);
exports.default = router;
