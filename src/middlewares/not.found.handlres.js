const httpStatus = require('http-status');

const notPageFound = (req, res, _next) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: httpStatus.NOT_FOUND,
    message: `The route ${req.originalUrl} does not exist`,
  });
}

module.exports = notPageFound;