const Joi = require("joi");

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().integer().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
  cuantity: Joi.number().integer().required(),
});

const updateProductSchema = Joi.object({
  name: Joi.string().optional(),
  price: Joi.number().integer().optional(),
  category: Joi.string().optional(),
  description: Joi.string().optional(),
  cuantity: Joi.number().integer().optional(),
});

module.exports = { createProductSchema, updateProductSchema };
