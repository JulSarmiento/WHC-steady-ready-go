import { Socket } from "socket.io";

export default (socket: Socket) => {

  console.log('Cliente conectado');

// Escucha el evento 'mensaje' enviado por el cliente
  socket.on('message', (data: object) => {
    console.log(data);
    socket.emit('chat', data);
  });
  
  // Escucha el evento 'disconnect' cuando el cliente se desconecta
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
};