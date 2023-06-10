"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization || !authorization.startsWith("Bearer ")) {
            throw "Token is invalid or is not present in request";
        }
        const token = authorization.split(" ")[1];
        if (!token) {
            throw "Token is invalid or is not present in request";
        }
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
        if (!decodedToken) {
            throw "Invalid Token";
        }
        req.user = decodedToken;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(http_status_1.default.FORBIDDEN).send(err.message || "Access forbidden");
    }
    ;
};
