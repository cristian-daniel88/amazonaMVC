const users = [];

// Join user to chat
function userJoin(id, username, room) {
  const user = { id, username, room };
  
  users.push(user);
  

  return user;
}

function getCurrentUser(id) {

  return users.find(user => user.id === id);
}

function getUser() {
  return users
}


function getRoomUsers(room) {
  
  return users.filter(user => user.room === room);
  
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);
  
  
  if (index !== -1) {
    
    return users.splice(index, 1)[0];
  }
}


const private = [];
function userJoinPrivate(id, username, room) {
  const user = { id, username, room };
  private.push(user);
  return user;
}

function getRoomUserPrivater(room) {
  
  return private.filter(user => user.room === room);
  
}

  
  module.exports = {
    userJoin,
    getCurrentUser,
    getRoomUsers,
    userLeave,
    userJoinPrivate,
    getRoomUserPrivater,
    getUser
   
  
  };

