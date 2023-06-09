import express, { Application } from 'express';
import * as http from 'http';
import { Server } from 'socket.io';

import indexrouter from './routes/index';
// import { errorHandler, notFoundHandler } from './middlewares/index';
import ioController from './controllers/io.controller';

const app: Application = express();

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
// app.use( errorHandler);
// app.use(notFoundHandler);

export default server;