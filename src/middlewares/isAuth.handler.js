import httpStatus from "http-status";
import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
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
  next()
};

export default isAuth;