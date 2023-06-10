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
exports.restrictedView = exports.signIn = void 0;
const models_1 = require("../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_1 = __importDefault(require("http-status"));
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Auth -> signIn", req.body);
    try {
        const { username, password } = req.body;
        const user = yield models_1.UserSchema.login(username, password);
        if (!user) {
            res.json({ error: "user / password combination does not exists" });
            return;
        }
        // token que se le envia al cliente con la informacion del usuario
        const token = jsonwebtoken_1.default.sign({ email: user.email,
            name: user.getFullName(),
            id: user.id }, String(process.env.JWT_SECRET_KEY), { expiresIn: "1d" });
        res.json({ token, email: user.email, name: user.getFullName() });
    }
    catch (e) {
        console.error(e);
        res.send(e);
    }
});
exports.signIn = signIn;
const restrictedView = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(http_status_1.default.OK).json({
        success: true,
        message: "confidential view!",
    });
});
exports.restrictedView = restrictedView;
