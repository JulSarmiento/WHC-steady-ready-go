"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const io_controller_1 = __importDefault(require("../controllers/io.controller"));
const server = http_1.default.createServer();
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*'
    }
});
io.on('connection', io_controller_1.default);
server.listen(3001, () => {
    console.log('Socket server listening on port 3001');
});
