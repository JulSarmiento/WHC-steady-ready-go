const JWT = require("jsonwebtoken");
const httpStatus = require("http-status");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  
  try {
    if (!authorization || !authorization.startsWith("Bearer")) {
      throw "Token is invalid or is not present in request";
    }
    
    const token = authorization.split(" ")[1];
    
    const decodedToken = JWT.verify(token, process.env.JWT_SECRET_KEY);
    
    if (!decodedToken) {
      throw "Invalid Token";
    }

    req.user = decodedToken;
    
    next();

  } catch(err) {    
    console.log(err);
    res.status(httpStatus.FORBIDDEN).send(err.message || "Access forbidden");
  };
}