const lblOnline = document.getElementById('lblOnline');
const lblOffline = document.getElementById('lblOffline');
const usersList = document.getElementById('users');
const chatContainer = document.getElementById('chatContainer');







const socket = io();


socket.on('connect', () => {
    console.log('conectado');
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
});

socket.on('disconnect', () => {
    console.log('desconectado');
    lblOffline.style.display = ''
    lblOnline.style.display = 'none';
    
    
})

socket.emit('joinRoom', { email:'Administrador', room:'sala' });

socket.on('roomUsers', ({ room, users }) => {
    console.log(room);
    console.log(users);
    printUsers(users)
   
  });

function printUsers(params) {
    usersList.innerHTML = '';
    if (params) {
        params.map((value) => {

            usersList.innerHTML += `<form action="chat.html">
					<div class="form-control">
						<label for="username">
                       
                        </label>
                       
                       
						<input
							type="submit"
							name="username"
							id="username"
							value=${value.username}
						/>
					</div>					
				</form> `
    
        })
    
    }
  
}

document.addEventListener('click' , (e) => {
    joinChatPrivate(e.target.id)
})

function joinChatPrivate(params) {
    console.log(params, 'join')
    socket.emit('joinprivatechat', { email:'Administrador', room: params });
}


socket.on('roomUserPrivate', ({ room, users }) => {
    console.log(room);
    console.log(users);
 
   
  });












  
