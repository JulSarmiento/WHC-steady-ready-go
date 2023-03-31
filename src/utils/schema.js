const Joi = require('joi');

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
  cuantity: Joi.number().required(),
});

module.exports = createProductSchema;