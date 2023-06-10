import http from 'http';
import { Server } from 'socket.io';
import ioController from '../controllers/io.controller';

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', ioController);

server.listen(3001, () => {
  console.log('Socket server listening on port 3001');
});