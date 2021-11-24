const { Socket } = require("socket.io");
const formatMessage = require("./messages");
const {
  userJoin,
  getRoomUsers,
  userLeave,
  userJoinPrivate,
  getRoomUserPrivater,
  getCurrentUser,
  getUser,
} = require("./utils");

const socketController = (socket = new Socket(), io) => {
  // socket.on('disconnect', ()=> {

  // });



  socket.on("joinRoom", ({ email, room }) => {
    const user = userJoin(socket.id, email, room);

    socket.join(user.room);

    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    //Send users and room info
    if (user) {
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });

  socket.on("joinprivatechat", ({ email, room }) => {
    const user = userJoinPrivate(socket.id, email, room);

    socket.join(user.room);

    io.to(user.room).emit("roomUserPrivate", {
      room: user.room,
      users: getRoomUserPrivater(user.room),
    });
  });


  socket.on("chatMessage", (msg) => {
    let user = getCurrentUser(socket.id);

    if (!user) {
      user = {
        id: socket.id,
        username: 'Administrador'
      }
    }
  
   
    io.to(user.room).emit("message", formatMessage(user.username="Manager", msg));
  });


};



module.exports = {
  socketController,
};
