module.exports = (socket) => {
  socket.on('join', (data) => {
    console.log(data);
    socket.join(data.room);
    socket.broadcast.to(data.room).emit('new user joined', { user: data.user, message: 'has joined this room.' });
  });

  socket.on('leave', (data) => {
    console.log(data);
    socket.broadcast.to(data.room).emit('left room', { user: data.user, message: 'has left this room.' });
    socket.leave(data.room);
  });

  socket.on('message', (data) => {
    console.log(data);
    io.in(data.room).emit('new message', { user: data.user, message: data.message });
  });
};