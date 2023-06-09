import {
  createProductSchema,
  updateProductSchema,
  createUserSchema,
  updateUserSchema,
} from "../models/joi.schema";

// "Error handlers"
import errorHandler from "./error.handlres";
import notFoundHandler from "./not.found.handlres";

// "Validation handler"
import validationHandler from "./validate.handler";

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