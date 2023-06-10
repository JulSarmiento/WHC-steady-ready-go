import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  const {authorization = ""} = req.headers;
  
  let decodedToken;
  try {
    decodedToken = jwt.verify(authorization, String(process.env.JWT_SECRET_KEY));
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


// asnotacion 
export default isAuth;