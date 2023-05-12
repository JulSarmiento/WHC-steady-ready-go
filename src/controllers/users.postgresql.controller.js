const httpStatus = require('http-status');

// Sequelize model for users table in PostgreSQL
const { User } = require('../models');
console.log("users", User);

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
    if (!user) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: 'User not found'
      });
    };
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
  const {dni, name, lastname, email, password, genre, phone, active}= req.body;

   const newUser = {
    dni,
    name,
    lastname,
    email,
    password,
    genre,
    phone,
    active,
  };

  try {
    const user = await User.create(newUser);
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
  const user = await User.findByPk(id);

  if (!user) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'User not found'
    });
  };
    
  try {
    await User.update(req.body, {
      where: {
        id
      }
    });

    res.status(httpStatus.OK).json({
      success: true,
      data: await User.findByPk(id)
    });
    
  }catch (error) {
    next(error);
  };
};

// delete user
exports.deleteUser = async (req, res, next) => {
  const {id} = req.params;
  try {
    const userToDelete = await User.findByPk(id);

    if (!userToDelete) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: 'User not found'
      });
    };

    await User.destroy({
      where: {
        id
      }
    });
    res.status(httpStatus.OK).json({
      success: true,
      message: `User with id "${id}" and name "${userToDelete.name}" has been deleted`
    });
  }catch (error) {
    next(error);
  };
};
