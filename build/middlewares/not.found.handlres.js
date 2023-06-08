"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const notPageFound = (req, res, _next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        status: http_status_1.default.NOT_FOUND,
        message: `The route ${req.originalUrl} does not exist`,
    });
};
exports.default = notPageFound;
