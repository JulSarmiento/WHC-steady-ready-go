"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const errorMiddleware = (err, _req, res, _next) => {
    const { statusCode, message } = err;
    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
        status: statusCode,
        code: http_status_1.default.INTERNAL_SERVER_ERROR,
        message,
    });
};
exports.default = errorMiddleware;
