const {Model, DataTypes} = require('sequelize');
const {encryptPassword} = require('../utils/auth');

const sequelize = require('../utils/postgresql.config');

/**
 * @property {string} email - User uniques email
 * @property {string} firstName - User first name
 * @property {string} lastName -  User last name
 * @property {string} password - User sensitive password - only received on creation or at login
 */
class User extends Model {
  /**
   * @promise
   *
   * @param {string} email - User email
   * @param {string} password - Password to validate
   * @returns {Promise<User>} - User if exists, null otherwise
   */
  static login(email, password) {
    return User.findOne({
      where: { email, password: encryptPassword(password) },
      
    }, );
  }
  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    validate: {
      len: [7, 8],
    }
  },
  name: {
    type: DataTypes.CHAR(10),
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      isLowercase: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [10, 16],
      set(password) {
        this.setDataValue('password', encryptPassword(password))
      }
    }
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [9, 11],
    }
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
});

module.exports = User;