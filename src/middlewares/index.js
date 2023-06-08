import {
  createProductSchema,
  updateProductSchema,
  createUserSchema,
  updateUserSchema,
} from "../models/joi.schema";


// "Error handlers"
const errorHandler = require('./error.handlres');
const notFoundHandler = require('./not.found.handlres');

// "Validation handler with joi"
const validationHandler = require('./validate.handler');

// "Products validation handler with joi"
const validationHandlerProductCreate =  validationHandler(createProductSchema);
const validationHandlerProductUpdate =  validationHandler(updateProductSchema);

// "Users validation handler with joi"
const validationHandlerUserCreate =  validationHandler(createUserSchema);
const validationHandlerUserUpdate =  validationHandler(updateUserSchema);

export {
  errorHandler,
  notFoundHandler,
  validationHandlerProductCreate,
  validationHandlerProductUpdate,
  validationHandlerUserCreate,
  validationHandlerUserUpdate,
}