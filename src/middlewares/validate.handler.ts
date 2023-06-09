import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import Joi from "joi";

const validateModel = (schema: Joi.Schema) => (req: Request, res: Response, next: NextFunction) => {
  console.log("schema", schema);
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: error.message,
    });
  };
  next();
};

export default validateModel;
