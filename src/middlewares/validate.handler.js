import httpStatus from "http-status";

const validateModel = (schema) => (req, res, next) => {
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
