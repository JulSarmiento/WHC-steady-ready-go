import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

import indexrouter from './routes/index.js';
import { errorHandler, notFoundHandler } from './middlewares/index.js';
import ioController from './controllers/io.controller.js';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});
io.on('connection', ioController);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use(indexrouter);
app.use(errorHandler);
app.use(notFoundHandler);

export default server;