import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

interface iError extends Error {
  statusCode?: number;
}

const errorMiddleware = (err: iError, _req: Request, res: Response, _next: NextFunction) => {
  const { statusCode, message } = err;

  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    status: statusCode,
    code: httpStatus.INTERNAL_SERVER_ERROR,
    message,
  });

};

export default errorMiddleware;