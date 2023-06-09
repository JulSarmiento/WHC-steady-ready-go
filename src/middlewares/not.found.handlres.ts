import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const notPageFound = (req: Request, res: Response, _next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: httpStatus.NOT_FOUND,
    message: `The route ${req.originalUrl} does not exist`,
  });
}

export default notPageFound;