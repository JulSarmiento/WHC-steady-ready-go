"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getByid = exports.getAll = void 0;
const http_status_1 = __importDefault(require("http-status"));
// Mongoose model for products collection in MongoDB
const { ProductSchemas } = require("../models/index");
console.log("product schema", ProductSchemas);
// Get all products
const getAll = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield ProductSchemas.find({});
        res.status(http_status_1.default.OK).json(products);
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.getAll = getAll;
// Get a product by id
const getByid = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log("id", id);
        const product = yield ProductSchemas.findById(id);
        if (!product) {
            return res.status(http_status_1.default.BAD_REQUEST).json({
                success: false,
                message: "Product not found",
            });
        }
        ;
        res.status(http_status_1.default.OK).json({
            success: true,
            data: product,
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.getByid = getByid;
// Create a new product
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, category, description, cuantity } = req.body;
        const newProduct = {
            name,
            price,
            category,
            description,
            cuantity,
        };
        const savedItem = yield ProductSchemas.create(newProduct);
        res.status(http_status_1.default.CREATED).json({
            success: true,
            data: savedItem,
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.createProduct = createProduct;
// // Update partial a product by id
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let product = yield ProductSchemas.findById(id);
        if (!product) {
            return res.status(http_status_1.default.NOT_FOUND).json({
                success: false,
                message: "Product not found",
            });
        }
        ;
        yield ProductSchemas.updateOne({ _id: id }, req.body);
        res.status(http_status_1.default.OK).json({
            success: true,
            data: yield ProductSchemas.findById(id),
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.updateProduct = updateProduct;
// Delete a product by id
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield ProductSchemas.find(id);
        if (!product) {
            return res.status(http_status_1.default.NOT_FOUND).json({
                success: false,
                message: "Product not found",
            });
        }
        ;
        yield ProductSchemas.deleteOne({ _id: id });
        res.status(http_status_1.default.OK).json({
            success: true,
            message: `Product: ${product.name}, deleted successfully`,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteProduct = deleteProduct;
