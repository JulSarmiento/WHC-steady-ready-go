const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const {email} = req.body;

  token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
  return res.status(httpStatus.OK).json({
    success: true,
    token
  });
};

exports.restrictedView = async (_req, res) => {
  return res.status(httpStatus.OK).json({
    success: true,
    message: 'confidential view!'
  });
};