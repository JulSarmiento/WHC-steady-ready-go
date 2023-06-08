"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const index_js_1 = __importDefault(require("./routes/index.js"));
// import { errorHandler, notFoundHandler } from './middlewares/index.js';
const io_controller_js_1 = __importDefault(require("./controllers/io.controller.js"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*'
    }
});
io.on('connection', io_controller_js_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static('public'));
app.use(index_js_1.default);
// app.use(errorHandler);
// app.use(notFoundHandler);
exports.default = server;
