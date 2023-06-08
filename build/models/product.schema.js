"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    "name": {
        type: String,
        unique: true,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: false
    },
    "cuantity": {
        type: Number,
        required: false,
        default: 0
    }
});
exports.default = mongoose_1.default.model("Product", productSchema);
