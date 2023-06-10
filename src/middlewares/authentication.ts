import httpStatus from "http-status";
import JWT from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
  user?: object; // Aquí puedes especificar el tipo de `user` según tu estructura de datos
}

export default (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  
  try {
    if (!authorization || !authorization.startsWith("Bearer ")  ) {
      throw "Token is invalid or is not present in request";
    }
    
    const token = authorization.split(" ")[1];

    if (!token) {
      throw "Token is invalid or is not present in request";
    }
    
    const decodedToken = JWT.verify(token, process.env.JWT_SECRET_KEY as string);
    
    if (!decodedToken) {
      throw "Invalid Token";
    }

    req.user  = decodedToken as object;
    
    next();

  } catch(err: any) {    
    console.log(err);
    res.status(httpStatus.FORBIDDEN).send(err.message || "Access forbidden");
  };
}