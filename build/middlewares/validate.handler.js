"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const validateModel = (schema) => (req, res, next) => {
    console.log("schema", schema);
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: error.message,
        });
    }
    ;
    next();
};
exports.default = validateModel;
