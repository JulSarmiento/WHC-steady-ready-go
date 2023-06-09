
import Joi from "joi";

// Products schema validation
export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().integer().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
  cuantity: Joi.number().integer().required(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().optional(),
  price: Joi.number().integer().optional(),
  category: Joi.string().optional(),
  description: Joi.string().optional(),
  cuantity: Joi.number().integer().optional(),
});

// "Users schema validation"
export const createUserSchema = Joi.object({
  dni: Joi.number().integer().required(),
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  genre: Joi.string().required(),
  phone: Joi.string().length(11).required(),
  active: Joi.boolean().required(),
});

export const updateUserSchema = Joi.object({
  dni: Joi.number().integer().optional(),
  name: Joi.string().optional(),
  lastname: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().optional(),
  genre: Joi.string().optional(),
  phone: Joi.string().length(11).optional(),
  active: Joi.boolean().optional(),
});


