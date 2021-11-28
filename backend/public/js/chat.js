const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

const socket = io();

const { username } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });


// join
socket.emit("joinRoom", { email: username, room: username });

socket.on("roomUsers", ({ room, users }) => {
    console.log(users)
  });

// enviar message
chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Get message text
    let msg = e.target.elements.msg.value;

  
    msg = msg.trim();
  
    if (!msg) {
      return false;
    }
  
    // Emit message to server
    socket.emit("chatMessage", msg);
  
    // Clear input
    e.target.elements.msg.value = "";
    e.target.elements.msg.focus();
  });


  // Listen for chatMessage
  // Message from server
  socket.on('message', (message) => {
    console.log(message );
    outputMessage(message)
  
     // Scroll down
   chatMessages.scrollTop = chatMessages.scrollHeight;
});

//messagefrom user
socket.on('messageUser', (message) => {
  console.log(message , 'mensajeuser');
  outputMessageUser(message)

   // Scroll down
 chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.on('send_message', (message) => {
  console.log(message );
  outputMessage(message)

   // Scroll down
 chatMessages.scrollTop = chatMessages.scrollHeight;
});



function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    const p = document.createElement('p');
    p.classList.add('meta');
    p.innerText = message.username;
    p.innerHTML += `<span>${message.time}</span>`;
    div.appendChild(p);
    const para = document.createElement('p');
    para.classList.add('text');
    para.innerText = message.text;
    div.appendChild(para);
    document.querySelector('.chat-messages').appendChild(div);
  }

  function outputMessageUser(message) {
    const div = document.createElement('div');
    div.classList.add('messageUser');
    const p = document.createElement('p');
    p.classList.add('meta');
    p.innerText = message.username;
    p.innerHTML += `<span>${message.time}</span>`;
    div.appendChild(p);
    const para = document.createElement('p');
    para.classList.add('text');
    para.innerText = message.text;
    div.appendChild(para);
    document.querySelector('.chat-messages').appendChild(div);
  }



  