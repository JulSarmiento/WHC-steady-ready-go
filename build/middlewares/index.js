"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationHandlerUserUpdate = exports.validationHandlerUserCreate = exports.validationHandlerProductUpdate = exports.validationHandlerProductCreate = exports.notFoundHandler = exports.errorHandler = void 0;
const joi_schema_1 = require("../models/joi.schema");
// "Error handlers"
const error_handlres_1 = __importDefault(require("./error.handlres"));
exports.errorHandler = error_handlres_1.default;
const not_found_handlres_1 = __importDefault(require("./not.found.handlres"));
exports.notFoundHandler = not_found_handlres_1.default;
// "Validation handler"
const validate_handler_1 = __importDefault(require("./validate.handler"));
// "Products validation handler with joi"
const validationHandlerProductCreate = (0, validate_handler_1.default)(joi_schema_1.createProductSchema);
exports.validationHandlerProductCreate = validationHandlerProductCreate;
const validationHandlerProductUpdate = (0, validate_handler_1.default)(joi_schema_1.updateProductSchema);
exports.validationHandlerProductUpdate = validationHandlerProductUpdate;
// "Users validation handler with joi"
const validationHandlerUserCreate = (0, validate_handler_1.default)(joi_schema_1.createUserSchema);
exports.validationHandlerUserCreate = validationHandlerUserCreate;
const validationHandlerUserUpdate = (0, validate_handler_1.default)(joi_schema_1.updateUserSchema);
exports.validationHandlerUserUpdate = validationHandlerUserUpdate;
