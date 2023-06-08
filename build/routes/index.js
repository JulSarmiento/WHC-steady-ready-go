"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const products_route_js_1 = __importDefault(require("./products.route.js"));
const users_route_js_1 = __importDefault(require("./users.route.js"));
const auth_controller_js_1 = require("../controllers/auth.controller.js");
const isAuth_handler_js_1 = require("../middlewares/isAuth.handler.js");
const router = express_1.default.Router();
const BASE_URL = "/api/v1/";
router.get("/health", (_req, res) => {
    res.status(http_status_1.default.OK).json({
        healht: "up",
        success: true,
        message: `Server working fine in enviroment: ${process.env.ENVIRONMENT}` || "Not set",
    });
})
    .use(`${BASE_URL}login`, auth_controller_js_1.login)
    .use(`${BASE_URL}auth/confidential`, isAuth_handler_js_1.isAuth, auth_controller_js_1.restrictedView)
    .use(`${BASE_URL}products`, products_route_js_1.default)
    .use(`${BASE_URL}users`, users_route_js_1.default);
exports.default = router;
