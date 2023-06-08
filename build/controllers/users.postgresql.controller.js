"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getByid = exports.getAll = void 0;
const http_status_1 = __importDefault(require("http-status"));
// Sequelize model for users table in PostgreSQL
const index_js__1 = require("../models/index.js  ");
console.log("users", index_js__1.UserSchema);
// /v1/users?offset=0&limit=10
// get all users
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { offset = 0, limit = 10 } = req.query;
    try {
        const users = yield index_js__1.UserSchema.findAll({
            offset,
            limit
        });
        res.status(http_status_1.default.OK).json({
            success: true,
            data: users
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.getAll = getAll;
// get user by id
const getByid = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield index_js__1.UserSchema.findByPk(id);
        if (!user) {
            return res.status(http_status_1.default.BAD_REQUEST).json({
                success: false,
                message: 'User not found'
            });
        }
        ;
        res.status(http_status_1.default.OK).json({
            success: true,
            data: user
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.getByid = getByid;
// create user
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni, name, lastname, email, password, genre, phone, active } = req.body;
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
        const user = yield index_js__1.UserSchema.create(newUser);
        res.status(http_status_1.default.CREATED).json({
            success: true,
            data: user
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.createUser = createUser;
// update user
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield index_js__1.UserSchema.findByPk(id);
    if (!user) {
        return res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: 'User not found'
        });
    }
    ;
    try {
        yield index_js__1.UserSchema.update(req.body, {
            where: {
                id
            }
        });
        res.status(http_status_1.default.OK).json({
            success: true,
            data: yield index_js__1.UserSchema.findByPk(id)
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.updateUser = updateUser;
// delete user
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const userToDelete = yield index_js__1.UserSchema.findByPk(id);
        if (!userToDelete) {
            return res.status(http_status_1.default.BAD_REQUEST).json({
                success: false,
                message: 'User not found'
            });
        }
        ;
        yield index_js__1.UserSchema.destroy({
            where: {
                id
            }
        });
        res.status(http_status_1.default.OK).json({
            success: true,
            message: `User with id "${id}" and name "${userToDelete.name}" has been deleted`
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.deleteUser = deleteUser;
