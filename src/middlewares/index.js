const {createProductSchema, updateProductSchema, createUserSchema, updateUserSchema } = require("../models/joi.schema");

// "Error handlers"
exports.errorHandler = require('./error.handlres');
exports.notFoundHandler = require('./not.found.handlres');

// "Validation handler with joi"
const validationHandler = require('./validate.model');

// "Products validation handler with joi"
exports.validationHandlerProductCreate =  validationHandler(createProductSchema);
exports.validationHandlerProductUpdate =  validationHandler(updateProductSchema);

// "Users validation handler with joi"
exports.validationHandlerUserCreate =  validationHandler(createUserSchema);
exports.validationHandlerUserUpdate =  validationHandler(updateUserSchema);