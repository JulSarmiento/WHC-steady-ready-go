import io from 'socket.io';
import ioController from '../controllers/io.controller';

io = io.listen(3001, {
  cors: {
    origin: '*'
  }
});


io.on('connection', ioController);