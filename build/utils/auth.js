"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = void 0;
const crypto_1 = __importDefault(require("crypto"));
const SALT = "sAruQ44A0jDbw0gr";
const encryptPassword = (password) => {
    return crypto_1.default.pbkdf2Sync(password, SALT, 1000, 64, `sha512`).toString(`hex`);
};
exports.encryptPassword = encryptPassword;
