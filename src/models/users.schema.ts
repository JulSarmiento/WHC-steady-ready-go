import { Model, DataTypes } from 'sequelize';
import { encryptPassword } from '../utils/auth';
import sequelize from '../utils/postgresql.config';

class User extends Model {
  static login(email: string, password: string): Promise<User | null> {
    return User.findOne({
      where: { email, password: encryptPassword(password) },
    });
  }
}

// User.addHook('beforeSave', async (user: User) => {
//   if (user.changed('password')) {
//     const encryptedPassword = encryptPassword(user.password);
//     user.setDataValue('password', encryptedPassword);
//   }
// });

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        len: [7, 8],
      },
    },
    name: {
      type: DataTypes.CHAR(10),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        isLowercase: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 16],
      },
      set(value: string) {
        const encryptedPassword = encryptPassword(value);
        this.setDataValue('password', encryptedPassword);
      },
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [9, 11],
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
);



export default User;