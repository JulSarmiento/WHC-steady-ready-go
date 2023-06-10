"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.UserSchema = void 0;
const users_schema_1 = __importDefault(require("./users.schema"));
exports.UserSchema = users_schema_1.default;
const product_schema_1 = __importDefault(require("./product.schema"));
exports.ProductSchema = product_schema_1.default;
