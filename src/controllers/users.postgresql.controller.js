const httpStatus = require('http-status');
const { User } = require('../models/index');
console.log('Model:', User.tableName);

// /v1/users?offset=0&limit=10
exports.getAll = async (req, res, next) => {
  const {offset = 0, limit = 10} = req.query;
  try {
    const users = await User.findAll({
      offset,
      limit
    });
    res.status(httpStatus.OK).json({
      success: true,
      users
    });
  }catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  const {body} = req;
  try {
    const user = await User.create(body);
    res.status(httpStatus.CREATED).json({
      success: true,
      user
    });
  }catch (error) {
    next(error);
  }
}
