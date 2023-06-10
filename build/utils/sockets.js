"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const io_controller_1 = __importDefault(require("../controllers/io.controller"));
socket_io_1.default = socket_io_1.default.listen(3001, {
    cors: {
        origin: '*'
    }
});
socket_io_1.default.on('connection', io_controller_1.default);
