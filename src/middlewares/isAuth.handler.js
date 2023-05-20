const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

exports.isAuth = async (req, res, _next) => {
  const auth = req.headers.authorization;
  let decodedToken;
  try {
    decodedToken = jwt.verify(auth, process.env.JWT_SECRET_KEY);
  } catch (err) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: 'Unauthorized!'
    });
  }
  if (!decodedToken) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: 'Unauthorized!'
    });
  };
};