import httpStatus from 'http-status';

// Sequelize model for users table in PostgreSQL
import { UserSchema } from '../models';
console.log("users", UserSchema);

// /v1/users?offset=0&limit=10
// get all users
export const getAll = async (req, res, next) => {
  const {offset = 0, limit = 10} = req.query;
  try {
    const users = await UserSchema.findAll({
      offset,
      limit
    });
    res.status(httpStatus.OK).json({
      success: true,
      data: users
    });

  } catch (error) {
    next(error);

  };
};

// get user by id
export const getByid = async (req, res, next) => {
  const {id} = req.params;
  try {
    const user = await UserSchema.findByPk(id);
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

  } catch (error) {
    next(error);

  };
};

// create user
export const createUser = async (req, res, next) => {
  const {dni, name, lastname, email, password, genre, phone, active} = req.body;
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
    const user = await UserSchema.create(newUser);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: user
    });

  } catch (error) {
    next(error);

  };
};

// update user
export const updateUser = async (req, res, next) => {
  const {id} = req.params;
  const user = await UserSchema.findByPk(id);
  if (!user) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'User not found'
    });
  };    
  try {
    await UserSchema.update(req.body, {
      where: {
        id
      }
    });
    res.status(httpStatus.OK).json({
      success: true,
      data: await UserSchema.findByPk(id)
    });
    
  }catch (error) {
    next(error);

  };
};

// delete user
export const deleteUser = async (req, res, next) => {
  const {id} = req.params;
  try {
    const userToDelete = await UserSchema.findByPk(id);
    if (!userToDelete) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: 'User not found'
      });
    };
    await UserSchema.destroy({
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
