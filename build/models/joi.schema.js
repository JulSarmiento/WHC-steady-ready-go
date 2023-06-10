"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Products schema validation
exports.createProductSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    price: joi_1.default.number().integer().required(),
    category: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    cuantity: joi_1.default.number().integer().required(),
});
exports.updateProductSchema = joi_1.default.object({
    name: joi_1.default.string().optional(),
    price: joi_1.default.number().integer().optional(),
    category: joi_1.default.string().optional(),
    description: joi_1.default.string().optional(),
    cuantity: joi_1.default.number().integer().optional(),
});
// "Users schema validation"
exports.createUserSchema = joi_1.default.object({
    dni: joi_1.default.number().integer().required(),
    name: joi_1.default.string().required(),
    lastname: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
    genre: joi_1.default.string().required(),
    phone: joi_1.default.string().length(11).required(),
    active: joi_1.default.boolean().required(),
});
exports.updateUserSchema = joi_1.default.object({
    dni: joi_1.default.number().integer().optional(),
    name: joi_1.default.string().optional(),
    lastname: joi_1.default.string().optional(),
    email: joi_1.default.string().email().optional(),
    password: joi_1.default.string().optional(),
    genre: joi_1.default.string().optional(),
    phone: joi_1.default.string().length(11).optional(),
    active: joi_1.default.boolean().optional(),
});
