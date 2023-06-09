"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const auth_1 = require("../utils/auth");
const postgresql_config_1 = __importDefault(require("../utils/postgresql.config"));
class User extends sequelize_1.Model {
    static login(email, password) {
        return User.findOne({
            where: { email, password: (0, auth_1.encryptPassword)(password) },
        });
    }
}
// User.addHook('beforeSave', async (user: User) => {
//   if (user.changed('password')) {
//     const encryptedPassword = encryptPassword(user.password);
//     user.setDataValue('password', encryptedPassword);
//   }
// });
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    dni: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            len: [7, 8],
        },
    },
    name: {
        type: sequelize_1.DataTypes.CHAR(10),
        allowNull: false,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            isLowercase: true,
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [10, 16],
        },
        set(value) {
            const encryptedPassword = (0, auth_1.encryptPassword)(value);
            this.setDataValue('password', encryptedPassword);
        },
    },
    genre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [9, 11],
        },
    },
    active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    sequelize: postgresql_config_1.default,
    modelName: 'User',
    tableName: 'users',
});
exports.default = User;
