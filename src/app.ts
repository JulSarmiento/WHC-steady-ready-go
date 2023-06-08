const express = require('express');
const log = require('morgan');
const http = require('http');
const { Server } = require('socket.io');


const indexrouter = require('./routes');
const { errorHandler, notFoundHandler } = require('./middlewares');

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});
io.on('connection', require('./controllers/io.controller'));

app.use(log(process.env.ENVIRONMENT));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use(indexrouter);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = server;