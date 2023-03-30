const httpStatus = require('http-status');

const errorMiddleware = (err, _req, res, _next) => {
  const { statusCode, message } = err;

  res.status(statusCode).json({
    status: statusCode,
    message,
  });

}

module.exports = errorMiddleware;