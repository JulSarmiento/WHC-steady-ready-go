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
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictedView = exports.login = void 0;
const httpStatus = require('http-status');
const JWT = require('jsonwebtoken');
const User = require('../models/users.schema');
exports.signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Auth -> signIn", req.body);
    try {
        const { username, password } = req.body;
        const user = yield User.login(username, password);
        if (!user) {
            res.json({ error: "user / password combination does not exists" });
            return;
        }
        // token que se le envia al cliente con la informacion del usuario
        const token = JWT.sign({ email: user.email,
            name: user.getFullName(),
            id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
        res.json({ token, email: user.email, name: user.getFullName() });
    }
    catch (e) {
        console.error(e);
        res.send(e);
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Auth -> signIn", req.body);
    try {
        const { username, password } = req.body;
        const user = yield User.login(username, password);
        if (!user) {
            res.json({ error: "user / password combination does not exists" });
            return;
        }
        const token = JWT.sign({ email: user.email }, process.env.JWT_SECRET_KEY, {
            expiresIn: "1d",
        });
        res.json({ token, email: user.email, name: user.getFullName() });
    }
    catch (e) {
        console.error(e);
        res.send(e);
    }
});
exports.login = login;
const restrictedView = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(httpStatus.OK).json({
        success: true,
        message: "confidential view!",
    });
});
exports.restrictedView = restrictedView;
