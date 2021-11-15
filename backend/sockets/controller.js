const { Socket } = require("socket.io");
const { userJoin, getRoomUsers, userLeave, userJoinPrivate, getRoomUserPrivater} = require("./utils");

const socketController =  (socket = new Socket, io) => {
    // socket.on('disconnect', ()=> {
       
    // });

    socket.on('joinRoom', ({ email, room }) => {
        const user = userJoin(socket.id, email, room);
    
        socket.join(user.room);

        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
          });
    

        });


        socket.on('disconnect', () => {
            const user = userLeave(socket.id);
            
            
         
        
            
              //Send users and room info
              if (user) {
                io.to(user.room).emit('roomUsers', {
                    room: user.room,
                    users: getRoomUsers(user.room)
                  });
                
              }
           
          });




          socket.on('joinprivatechat', ({ email, room}) => {
            const user = userJoinPrivate(socket.id, email, room);
        
            socket.join(user.room);


            io.to(user.room).emit('roomUserPrivate', {
                room: user.room,
                users: getRoomUserPrivater(user.room)
              });
        
            });

 

  

   
}
module.exports = {
    socketController,
    
}