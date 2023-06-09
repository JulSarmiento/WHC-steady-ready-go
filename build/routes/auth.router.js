"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const isAuth_handler_1 = require("../middlewares/isAuth.handler");
const router = express_1.default.Router();
router.post("/login", auth_controller_1.login);
router.get("/restricted", isAuth_handler_1.isAuth, auth_controller_1.restrictedView);
exports.default = router;
