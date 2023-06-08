"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationHandlerUserUpdate = exports.validationHandlerUserCreate = exports.validationHandlerProductUpdate = exports.validationHandlerProductCreate = exports.notFoundHandler = exports.errorHandler = void 0;
const joi_schema_js_1 = require("../models/joi.schema.js");
// "Error handlers"
const errorHandler = require('./error.handlres.js');
exports.errorHandler = errorHandler;
const notFoundHandler = require('./not.found.handlres.js');
exports.notFoundHandler = notFoundHandler;
// "Validation handler with joi"
const validationHandler = require('./validate.handler.js');
// "Products validation handler with joi"
const validationHandlerProductCreate = validationHandler(joi_schema_js_1.createProductSchema);
exports.validationHandlerProductCreate = validationHandlerProductCreate;
const validationHandlerProductUpdate = validationHandler(joi_schema_js_1.updateProductSchema);
exports.validationHandlerProductUpdate = validationHandlerProductUpdate;
// "Users validation handler with joi"
const validationHandlerUserCreate = validationHandler(joi_schema_js_1.createUserSchema);
exports.validationHandlerUserCreate = validationHandlerUserCreate;
const validationHandlerUserUpdate = validationHandler(joi_schema_js_1.updateUserSchema);
exports.validationHandlerUserUpdate = validationHandlerUserUpdate;
