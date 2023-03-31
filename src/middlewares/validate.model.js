const httpStatus = require('http-status');

const validateModel = (schema) => (req, res, next) => {

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: error.message
    });
  }

  next();
}

module.exports = validateModel;