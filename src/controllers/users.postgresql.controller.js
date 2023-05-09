const httpStatus = require('http-status');
const { User } = require('../models');

// /v1/users?offset=0&limit=10
// get all users
exports.getAll = async (req, res, next) => {
  const {offset = 0, limit = 10} = req.query;
  try {
    const users = await User.findAll({
      offset,
      limit
    });
    res.status(httpStatus.OK).json({
      success: true,
      data: users
    });
  }catch (error) {
    next(error);
  }
};

// get user by id
exports.getByid = async (req, res, next) => {
  const {id} = req.params;
  try {
    const user = await User.findByPk(id);
    res.status(httpStatus.OK).json({
      success: true,
      data: user
    });
  }catch (error) {
    next(error);
  }
};

// create user
exports.createUser = async (req, res, next) => {
  const {body} = req;
  try {
    const user = await User.create(body);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: user
    });
  }catch (error) {
    next(error);
  }
}

// update user
exports.updateUser = async (req, res, next) => {
  const {id} = req.params;
  const {body} = req;
  try {
      await User.update(body, {
      where: {
        id
      }
    });
    const updateUser = await User.findByPk(id);
    res.status(httpStatus.OK).json({
      success: true,
      data: updateUser
    });
    
  }catch (error) {
    next(error);
  }
}

