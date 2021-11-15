const { Socket } = require("socket.io");
const { userJoin, getRoomUsers} = require("./utils");

const socketController =  (socket = new Socket, io) => {
    socket.on('disconnect', ()=> {
       
    });

    socket.on('joinRoom', ({ email, room }) => {
        const user = userJoin(socket.id, email, room);
    
        socket.join(user.room);

        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
          });
    

        });

 

  

   
}
module.exports = {
    socketController,
    
}